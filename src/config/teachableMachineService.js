const { tmImage } = require('@teachablemachine/image');

const URL = '../api/teachable_model/'; 

let model, maxPredictions;


const init = async () => {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
};


const predictImage = async (imagePath) => {
    try {
        if (!model) {
            await init();
        }
        const prediction = await model.predict(imagePath);
        return prediction[0];
    } catch (error) {
        console.error('Error predicting image:', error);
        throw new Error('Error predicting image');
    }
};

module.exports = { predictImage };
