import re

# 변환할 대상 파일들
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
    with open(input_file, "rb") as f:
        raw = f.read()
    # UTF-8 기준으로 디코딩 (안 맞는 건 무시)
    text = raw.decode("utf-8", errors="ignore")

    # 특수문자 제거
    for ch in bad_chars:
        text = text.replace(ch, "")
    text = control_char_re.sub('', text)

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(text)

    print(f"→ 클린 저장 완료: {output_file}")

print("모든 변환 완료!")
