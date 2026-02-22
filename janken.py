import random

hands = ["グー", "チョキ", "パー"]

print("じゃんけんゲームへようこそ！")
print("1: グー  2: チョキ  3: パー")

choice = input("手を選んでください (1/2/3): ")

if choice not in ["1", "2", "3"]:
    print("無効な入力です。1、2、3のいずれかを入力してください。")
else:
    user = hands[int(choice) - 1]
    computer = random.choice(hands)

    print(f"あなた: {user}")
    print(f"コンピューター: {computer}")

    if user == computer:
        print("結果: 引き分け！")
    elif (user == "グー" and computer == "チョキ") or \
         (user == "チョキ" and computer == "パー") or \
         (user == "パー" and computer == "グー"):
        print("結果: あなたの勝ち！")
    else:
        print("結果: あなたの負け...")
