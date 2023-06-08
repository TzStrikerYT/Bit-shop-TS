import Express from "express";
import mongoose from "mongoose";
import productModel from "../models/product.model";

export const getProducts = async (req: Express.Request, res: Express.Response) => {
    try {

        let result = await productModel.find()
        return res.status(200).json({result})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Error en la api", error})
    }
}

export const createProduct = async (req: Express.Request, res: Express.Response) => {

    try {

        let data = req.body

        let result = await productModel.create(data)
        return res.status(201).json({msg: "Producto creado con exito", result})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Error en la api", error})
    }
}

export const updateProduct = async (req: Express.Request, res: Express.Response) => {
    try {

        let {_id} = req.body
        let data = req.body

        let result = await productModel.findByIdAndUpdate(_id, data)
        return res.status(204).json({msg: "producto actualizado", result})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Error en la api", error})
    }
}

export const deleteProduct = async (req: Express.Request, res: Express.Response) => {
    try {

        let {_id} = req.params

        let result = await productModel.findByIdAndDelete(_id)
        return res.status(200).json({msg: "Producto eliminado"})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Error en la api", error})
    }
}

export const uploadImageProduct = async (req: Express.Request, res: Express.Response) => {
    try {

        console.log({req})
        let {file} = req

        res.status(201).json({msg: `archivo guardado correctamente`})

    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Error en la api", error})
    }
}