from flask import Flask, request
from fer import FER
import matplotlib.pyplot as plt
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/emo', methods=['GET', 'POST'])
def upload_file():
    print('aa')
    if request.method == 'POST':
        print(request.data)
        file = request.files['file']
        file.save('mySent.jpg')
        img = plt.imread("mySent.jpg")
    detector = FER(mtcnn=True)
    print(detector.detect_emotions(img))
    plt.imshow(img)

    emotion, score = detector.top_emotion(img)
    print(emotion, score)

    return jsonify({"emotion": emotion, "score": score})


@app.route('/send', methods=['GET'])
def send_msg():
    return jsonify({"msg": "hi"})


if __name__ == '__main__':
    app.run()
