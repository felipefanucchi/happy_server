import multer, { Multer } from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (_, file, callback: Function) => {
            const fileName = `${Date.now()}-${file.originalname}`;

            callback(null, fileName);
        }
    })
};