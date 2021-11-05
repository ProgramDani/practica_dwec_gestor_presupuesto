/*programa de ejemplo para generar un conjunto de gastos*/
import * as gestionPresupuestoWeb from "./gestionPresupuestoWeb.js";
import * as gestionPresupuesto from "./gestionPresupuesto.js";

//Actualizar el presupuesto
gestionPresupuesto.actualizarPresupuesto(1500);

//Mostrar el presupuesto en el div#presupuesto
let presu = gestionPresupuesto.mostrarPresupuesto();
gestionPresupuestoWeb.mostrarDatoEnId('presupuesto', presu);

//Crear los siguientes gastos
let gasto1 = gestionPresupuesto.CrearGasto('Comprar carne', 23.44,'2021-10-06','casa','comida');
let gasto2 = gestionPresupuesto.CrearGasto('Compra fruta y verdura', 14.25,'2021-09-06','supermercado','comida');
let gasto3 = gestionPresupuesto.CrearGasto('Bonobús', 18.60,'2020-05-26','transporte');
let gasto4 = gestionPresupuesto.CrearGasto('Gasolina', 60.42,'2021-10-08','transporte','gasolina');
let gasto5 = gestionPresupuesto.CrearGasto('Seguro hogar', 206.45,'2021-09-26','casa','seguros');
let gasto6 = gestionPresupuesto.CrearGasto('Seguro coche', 195.78,'2021-10-06','transporte','seguros');

//Añadir los gastos creados (función anyadirGasto)
gestionPresupuesto.anyadirGasto(gasto1);
gestionPresupuesto.anyadirGasto(gasto2);
gestionPresupuesto.anyadirGasto(gasto3);
gestionPresupuesto.anyadirGasto(gasto4);
gestionPresupuesto.anyadirGasto(gasto5);
gestionPresupuesto.anyadirGasto(gasto6);

//Mostrar los gastos totales en div#gastos-totales
let GastoTotal = gestionPresupuesto.calcularTotalGastos();
gestionPresupuestoWeb.mostrarDatoEnId('gastos-totales',GastoTotal);

//Mostrar el balance total en div#balance-total
let valor = gestionPresupuesto.calcularBalance();
gestionPresupuestoWeb.mostrarDatoEnId('balance-total',valor);

//Mostrar el listado completo de gastos en div#listado-gastos-completo
let listaGastos = gestionPresupuesto.listarGastos();
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-completo',listaGastos);

//Mostrar el listado de gastos realizados en septiembre de 2021 en div#listado-gastos-filtrado-1
let gastosfiltrados1 = gestionPresupuesto.filtrarGastos({fechaDesde: "2021-09-01", fechaHasta: "2021-09-30"});
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-1',gastosfiltrados1);

//Mostrar el listado de gastos de más de 50€ en div#listado-gastos-filtrado-2
let gastosfiltrados2 = gestionPresupuesto.filtrarGastos({valorMinimo: 50});
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-2',gastosfiltrados2);

//Mostrar el listado de gastos de más de 200€ con etiqueta seguros en div#listado-gastos-filtrado-3
let gastosfiltrados3 = gestionPresupuesto.filtrarGastos({valorMinimo: 200, etiquetasTiene:["seguros"]});
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-3',gastosfiltrados3);

//Mostrar el listado de gastos que tengan las etiquetas comida o transporte de menos de 50€ en div#listado-gastos-filtrado-4
let gastosfiltrados4 = gestionPresupuesto.filtrarGastos({etiquetasTiene:["comida","transporte"],valorMinimo: 50});
gestionPresupuestoWeb.mostrarGastoWeb('listado-gastos-filtrado-4',gastosfiltrados4);

//Mostrar el total de gastos agrupados por día en div#agrupacion-dia
let agrupar = gestionPresupuesto.agruparGastos('dia');
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb('agrupacion-dia',agrupar,'dia');

//Mostrar el total de gastos agrupados por mes en div#agrupacion-mes
let agrupar = gestionPresupuesto.agruparGastos('mes');
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb('agrupacion-mes',agrupar,'mes');

//Mostrar el total de gastos agrupados por año en div#agrupacion-anyo
let agrupar = gestionPresupuesto.agruparGastos('anyo');
gestionPresupuestoWeb.mostrarGastosAgrupadosWeb('agrupacion-anyo',agrupar,'anyo');