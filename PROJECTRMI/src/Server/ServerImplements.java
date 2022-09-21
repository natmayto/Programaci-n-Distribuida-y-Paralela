/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Server;

import RMI.RemoteInterface;
import java.rmi.server.UnicastRemoteObject;
import java.util.Random;
import java.util.Scanner;
import javax.swing.JOptionPane;
import static javax.xml.bind.DatatypeConverter.parseString;

/**
 *
 * @author Natalia
 */
public class ServerImplements extends UnicastRemoteObject implements RemoteInterface {

     

    ServerImplements() throws Exception {
        super();
       
    }
    @Override
    public String mostrar(int x, int y){
        String respuesta = "";
       int suma = 0;
       Random random = new Random();
        
        int [][] salario = new int[x][y];
        
         for (x=0; x<salario.length; x++){  
            for (y=0; y<salario.length; y++){
                salario[x][y]=random.nextInt(1000);
            }
        }
         
        for (x=0; x<salario.length; x++){
                 respuesta = respuesta + "\n";
                for (y=0; y<salario.length; y++){
                    respuesta = respuesta+" "+salario[x][y];
                    suma = suma + salario[x][y];
                }
                }
                respuesta = respuesta + "\n";
           return (respuesta);
    }
    

    @Override
    public int suma(int x, int y){
        String respuesta = "";
       int suma = 0;
       Random random = new Random();
        
        int [][] salario = new int[x][y];
        
         for (x=0; x<salario.length; x++){  
            for (y=0; y<salario.length; y++){
                salario[x][y]=random.nextInt(1000);
            }
        }
         
        for (x=0; x<salario.length; x++){
                 respuesta = respuesta + "\n";
                for (y=0; y<salario.length; y++){
                    respuesta = respuesta+" "+salario[x][y];
                    suma = suma + salario[x][y];
                }
                }
                respuesta = respuesta + "\n";
      return suma;
    }
    
    @Override
    public double promedio(int x, int y){
        float promedio;
       String respuesta = "";
       int suma = 0;
       Random random = new Random();
        
        int [][] salario = new int[x][y];
        
         for (x=0; x<salario.length; x++){  
            for (y=0; y<salario.length; y++){
                salario[x][y]=random.nextInt(1000);
            }
        }
         
        for (x=0; x<salario.length; x++){
                 respuesta = respuesta + "\n";
                for (y=0; y<salario.length; y++){
                    respuesta = respuesta+" "+salario[x][y];
                    suma = suma + salario[x][y];
                }
                }
                respuesta = respuesta + "\n";
                promedio = suma / salario[0].length;
      return promedio;
    }
    
    @Override
    public String saludo(String x){
        x = "MUCHAS GRACIAS PROFESOR Y COMPAÑERITOS <3 !!!";
        return x;
    }
    
    
}
