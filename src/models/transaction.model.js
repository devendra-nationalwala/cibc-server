const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON } = require('./plugins');
const transactionSchema = mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true,
            trim: true,
            default: 0
        },
        comments: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: Number,
            required: true,
            trim: true
        },
        id: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        recipient:
        {
            accountNumber: {
                type: String,
                required: true
            },
            bank: {
                type: String,
                enum: ["TD", "CIBC", "RBC"]
            },
            email: {
                type: String,
                required: true,
                unique: true,
                trim: true,
                lowercase: true,
                validate(value) {
                    if (!validator.isEmail(value)) {
                        throw new Error('Invalid email');
                    }
                }
            },
            firstName: {
                type: String,
                trim: true
            },
            lastName: {
                type: String,
                trim: true
            }
        }
        ,
        sender:
        {
            dateOfBirth: {
                type: Date,
                required: true,
                trim: true
            },
            firstName: {
                type: String,
                trim: true
            },
            lastName: {
                type: String,
                trim: true
            },
            idNumber: {
                type: String,
                trim: true
            }
        }
        ,
        status: {
            type: String,
            required: true,
            enum: ["PENDING", "COMPLETED", "REJECTED", "IN PROGRESS"]
        }
    }
);

transactionSchema.plugin(toJSON);

/**
 * @typedef Transaction
 */
const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;