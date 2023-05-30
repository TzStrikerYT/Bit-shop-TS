import Express from "express";
import mongoose from "mongoose";
import userModel from "../models/user.model";

export const getUsers = async (req: Express.Request, res: Express.Response) => {
  try {

    const result = await userModel.find() // los usuarios existentes
    res.status(200).json({result})

  } catch (error) {
    console.log(error)
    return res.status(400).json({msg: "ha ocurrido un error", error})
  }
}

export const createUser = async (req: Express.Request, res: Express.Response) => {

  try {
    
    let newUser = req.body
    const userCreated = await userModel.create(newUser)

    if(userCreated) return res.status(201).json({msg: "Uusario Creado"})
    throw {msg: "Error al crear el usuario"}

  } catch (error) {
    console.log(error)
    return res.status(400).json({msg: "ha ocurrido un error", error})
  }

}

export const updateUser = async (req: Express.Request, res: Express.Response) => {
  // {
  //   _id:
  //   dataToUpdate: {} 
  // }

  try {

    let {dataToUpdate, _id } = req.body
    const updatedData = await userModel.findByIdAndUpdate(_id, dataToUpdate)

    return res.status(200).json({msg: "Usuario actualizado"})

  } catch (error) {
    console.log(error)
    return res.status(400).json({msg: "ha ocurrido un error", error})
  }

}