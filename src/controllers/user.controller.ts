import Express from "express";
import mongoose from "mongoose";
import userModel from "../models/user.model";
import jwt from "jsonwebtoken"

export const login = async (req: Express.Request, res: Express.Response) => {

  /*{
    username:
    password: 
  }*/

  try {

    let {username, password} = req.body

    // buscar el usurio
    let user: any = await userModel.findOne({username})

    if(!user) throw {status: 404, msg: "El usurio no existe"}

    // revisar si la conraseña es correcta
    if(user.password !== password) throw {status: 401, msg: "Contraseña incorrecta"}

    // generar el token

    user = user.toObject()

    delete user.password
    delete user.paymentMethods

    let secret = process.env.SECRET_KEY
    
    if(!secret) throw {status: 400, msg: "No hay como encriptar el token"}

    const token = jwt.sign(user, secret, {expiresIn: "2h"})

    // responder login
    return res.status(200).json({msg: "Sesion Iniciada correctamente!", token})
    
  } catch (error: any) {
    console.log(error)
    return res.status(error.status || 400).json({msg: error.msg || error})
  }

}

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

export const deleteUser = async (req: Express.Request, res: Express.Response) => {
  try {

    let  {_id} =  req.params

    const deleted = await userModel.findByIdAndDelete(_id)
    return res.status(200).json({msg: "Usuario ELiminado"})
  } catch (error) {
    return res.status(400).json({msg: "ha ocurrido un error", error})
  }
}