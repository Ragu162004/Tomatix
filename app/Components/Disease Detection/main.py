import base64
import os
from io import BytesIO
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app)

model = load_model('./tomato_disease_model.h5')

class_names = {
    0: 'Bacterial_Spot',
    1: 'Early_Blight',
    2: 'Healthy',
    3: 'Late_Blight',
    4: 'Leaf_Mold',
    5: 'Mosaic_Virus',
    6: 'Septoria_Leaf_Spot',
    7: 'Target_Spot',
    8: 'Tomato_Yellow_Leaf_Curl_Virus'
}

def predict_image(img):
    img = img.resize((224, 224))
    img_array = np.array(img) / 255.0 
    img_array = np.expand_dims(img_array, axis=0) 

    predictions = model.predict(img_array)
    predicted_class_index = np.argmax(predictions[0])
    return class_names.get(predicted_class_index, 'Unknown Class')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if 'image' not in data:
        return jsonify({'error': 'No image data provided'}), 400

    try:
        
        image_data = data['image'].split(",")[1]
        image_bytes = base64.b64decode(image_data)
        img = Image.open(BytesIO(image_bytes)).convert('RGB')

        
        prediction = predict_image(img)

        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': f"Error processing image: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
