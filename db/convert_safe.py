import re

files = [
    ("C:/Users/Myo_0/Desktop/toyproject/db/Locations_utf8.csv",
     "C:/Users/Myo_0/Desktop/toyproject/db/Locations_clean.csv"),
    ("C:/Users/Myo_0/Desktop/toyproject/db/Sales_utf8.csv",
     "C:/Users/Myo_0/Desktop/toyproject/db/Sales_clean.csv"),
]

# 제어문자 범위 정의 (0x00–0x1F, 0x7F–0x9F)
control_chars = ''.join(map(chr, list(range(0,32)) + list(range(127,160))))
control_char_re = re.compile('[%s]' % re.escape(control_chars))

bad_chars = ["\u200b", "\u200c", "\u200d", "\ufeff", "\u00a0"]

for input_file, output_file in files:
    print(f"처리 중: {input_file}")
    with open(input_file, "r", encoding="utf-8", errors="ignore") as f:
        lines = f.readlines()

    cleaned_lines = []
    for line in lines:
        # 특수문자 제거
        for ch in bad_chars:
            line = line.replace(ch, "")
        line = control_char_re.sub('', line)
        cleaned_lines.append(line)

    with open(output_file, "w", encoding="utf-8") as f:
        f.writelines(cleaned_lines)

    print(f"→ 클린 저장 완료: {output_file}")

print("모든 변환 완료!")