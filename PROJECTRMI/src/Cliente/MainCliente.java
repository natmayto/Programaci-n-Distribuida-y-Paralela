/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Cliente;

import RMI.RemoteInterface;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.Random;
import javax.swing.JOptionPane;

/**
 *
 * @author Natalia
 */
public class MainCliente {
    
    public static void main(String args[]) throws RemoteException, NotBoundException, Exception{
        try{
           
            String valora= JOptionPane.showInputDialog("INGRESA LA CANTIDAD DE TRABAJADORES");
            String valorb= JOptionPane.showInputDialog("INGRESA LA CANTIDAD DE MESES");
            int a= Integer.parseInt(valora);
            int b= Integer.parseInt(valorb);
            String c= "";
            Random random = new Random(); 
            int x = 0;
            int y = 0;
        
        int [][] salario = new int[x][y];
        for (x=0; x<salario.length; x++){  
            for (y=0; y<salario.length; y++){
                salario[x][y]=random.nextInt(1000);
            }
        }
            Registry miRegistro = LocateRegistry.getRegistry("127.0.0.1", 1234);
            RemoteInterface s = (RemoteInterface) miRegistro.lookup("TallerRMI");
            JOptionPane.showMessageDialog(null, "RESULTADO DE LA MATRIZ, LAS COLUMNAS REPRESENTAN LOS EMPLEADOS Y LAS FILAS SON LOS MESES: "+s.mostrar(a, b));
            JOptionPane.showMessageDialog(null, "RESULTADO DE LA SUMA DEL PAGO, LA CUAL ES CADA UNO DE LOS NÚMEROS ALEATORIOS DENTRO DE LA MATRIZ, LA CUAL ES:  "+s.suma(a, b));
            JOptionPane.showMessageDialog(null, "RESULTADO DEL PROMEDIO DEL PAGO DE LOS TRABAJADORES:  "+s.promedio(a, b));
            JOptionPane.showMessageDialog(null, ""+s.saludo(c));
        } catch (Exception e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }      
    }
}
