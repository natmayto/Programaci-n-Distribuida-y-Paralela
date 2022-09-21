/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package RMI;

import java.rmi.Remote;

/**
 *
 * @author Natalia
 */
public interface RemoteInterface extends Remote{

    public String mostrar(int x, int y) throws Exception;
    public int suma(int x, int y) throws Exception;
    public double promedio(int x, int y) throws Exception;
    public String saludo(String x) throws Exception;
}
