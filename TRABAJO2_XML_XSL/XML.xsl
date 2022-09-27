<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/" >
  <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
          <title>PRESUPUESTO POLI</title>
      </head>
      
  <body>  
    <table border="1" style="float: left;" width="50%">
        <td><h1>INGRESOS</h1></td>
        <tr bgcolor="#9acd32">
            <th><h3>CONCEPTO</h3></th>
            <th><h3>AÑO</h3></th>
            <th><h3>PESOS</h3></th>
        </tr>
	<xsl:for-each select="//presupuesto/ingresos">
       <tr>
       <th><xsl:value-of select="concepto"/></th>
       <th><xsl:value-of select="anio"/></th>
       <th><xsl:value-of select="peso"/></th>
        </tr>
	</xsl:for-each>       
  </table>
  
  
  
<table border="1" width="50%">
        <td><h1>EGRESOS</h1></td>
        <tr bgcolor="#3396FF">
            <th><h3>CONCEPTO</h3></th>
            <th><h3>AÑO</h3></th>
            <th><h3>PESOS</h3></th>
        </tr>
	<xsl:for-each select="//presupuesto/egresos">
       <tr>
       <th><xsl:value-of select="concepto"/></th>
       <th><xsl:value-of select="anio"/></th>
       <th><xsl:value-of select="peso"/></th>
        </tr>
	</xsl:for-each>       
  </table> 
  
  <table border="1" style="float: left;" width="50%">
        <td><h1>TOTAL DE INGRESOS</h1></td>
        <tr bgcolor="#B5FF33">
            <th><h3>CONCEPTO</h3></th>
            <th><h3>TOTAL POR CONCEPTO</h3></th>
            <th><h3>TOTAL</h3></th>
        </tr>
	<xsl:for-each select="//presupuesto/ingresostotal">
       <tr>
       <th><xsl:value-of select="concepto"/></th>
       <th><xsl:value-of select="total"/></th>
       <th><xsl:value-of select="totali"/></th>
        </tr>
	</xsl:for-each>       
  </table> 
  
  <table border="1" width="50%">
        <td><h1>TOTAL EGRESOS</h1></td>
        <tr bgcolor="#33FFF3">
            <th><h3>CONCEPTO</h3></th>
            <th><h3>CANTIDAD DE LETRAS</h3></th>
             <th><h3>TOTAL POR CONCEPTO</h3></th>
             <th><h3>TOTAL</h3></th>
            
        </tr>
	<xsl:for-each select="//presupuesto/egresostotal">
       <tr>
       <th><xsl:value-of select="concepto"/></th>
       <th><xsl:value-of select="letra"/></th>
       <th><xsl:value-of select="total"/></th>
       <th><xsl:value-of select="totale"/></th>
        </tr>
	</xsl:for-each>       
  </table>
  
  </body>
  
  </html>
</xsl:template>

</xsl:stylesheet>
