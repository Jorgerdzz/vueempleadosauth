import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados{

    login(user){
        return new Promise((resolve)=>{
            let url = Global.urlApiEmpleadosAuth;
            let request = "Auth/Login";
            let header = {
                "Content-Type": "application/json"
            }
            axios.post(url + request, user, {headers: header}).then(response=>{
                resolve(response)
            })
        }) 
    }

    getEmpleado(){
        return new Promise((resolve)=>{
            let url = Global.urlApiEmpleadosAuth;
            let request = "api/Empleados/PerfilEmpleado";
            let header = {
                "Authorization": "bearer " + sessionStorage.getItem('token')
            }
            axios.get(url + request, {headers: header}).then(response=>{
                resolve(response.data)
            })
        })
    }

    getEmpleadosSubordinados(){
        return new Promise((resolve)=>{
            let url = Global.urlApiEmpleadosAuth;
            let request = "api/Empleados/Subordinados";
            let header = {
                "Authorization": "bearer " + sessionStorage.getItem('token')
            }
            const empleadosSubordinados = fetch(url + request, {headers: header}).then(response=> response.json());
            resolve(empleadosSubordinados)
        })
        
    }

}