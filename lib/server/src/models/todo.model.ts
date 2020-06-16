import { Schema, model, Document } from 'mongoose';
import { ITodoItem } from '../../../resources/todo-item.resource';

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const TodoItem = model<ITodoItem & Document>('todo-item', schema);
