// Script para la funcionalidad de la página (modales, botones, etc.)
const productsData = {
    anchetas: [
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
        { name: "Ancheta Deluxe", price: "$85.000 COP", image: "images/ANCHETA.jpeg", description: "Una selección curada de delicias para sorprender con queso, galletas gourmet, vino y chocolates finos.", category: "anchetas" },
    ],
    ramos: [
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
        { name: "Ramo de Rosas Rojas", price: "$75.000 COP", image: "images/RAMO.jpeg", description: "El clásico símbolo del amor eterno con 12 rosas rojas frescas y follaje verde.", category: "ramos" },
    ],
    peluches: [
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
        { name: "Oso de Peluche Gigante", price: "$120.000 COP", image: "images/PELUCHE.jpeg", description: "El abrazo más tierno y grande, de 1.5 metros de altura.", category: "peluches" },
    ],
    cajas: [
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
        { name: "Caja Sorpresa Dulce", price: "$60.000 COP", image: "images/CAJA.jpeg", description: "Un festival de sabores para los golosos con chocolates, gomitas, galletas y caramelos variados.", category: "cajas" },
    ],
    desayunos: [
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
        { name: "Desayuno Clásico", price: "$70.000 COP", image: "images/DESAYUNO.jpeg", description: "Café, pan y todo lo tradicional para un buen día: incluye café, jugo, sándwich de jamón y queso, fruta y una magdalena.", category: "desayunos" },
    ],
    decoraciones: [
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
        { name: "Decoración Fiesta Cumpleaños", price: "$150.000 COP", image: "images/DECORACION.jpeg", description: "Transformamos cualquier espacio en el escenario perfecto con globos, banderines, manteles y centros de mesa.", category: "decoraciones" },
    ]
};

// --- Variables DOM (se inicializan dentro de DOMContentLoaded) ---
let productContainer;
let filterButtons;
let categoryCards;
let paginationContainer;
const whatsappNumber = "573192523075"; // Tu número de WhatsApp

// --- Modal de Detalles del Producto ---
let productDetailModal;
let modalDetailImage;
let modalDetailName;
let modalDetailPrice;
let modalDetailDescription;
let modalDetailWhatsappBtn;
let closeModalButton;

// --- Funcionalidad Scroll To Top ---
let scrollToTopBtn;

// --- Variables de Paginación y Filtrado ---
const productsPerPage = 12; // Número de productos por página
let currentCategory = 'all'; // Categoría actualmente seleccionada
let currentPage = 1; // Página actual
let currentFilteredProducts = []; // Productos filtrados actuales

// --- Funcionalidad del Formulario de Contacto ---
let contactForm;

// --- Funcionalidad de Animación de Escritura ---
let typewriterTitle;

// --- Funciones de Carga y Filtrado ---
function getFilteredProducts(filter) {
    if (filter === 'all') {
        let allProducts = [];
        for (const category in productsData) {
            allProducts = allProducts.concat(productsData[category]);
        }
        return allProducts;
    } else {
        return productsData[filter] || [];
    }
}

function displayProducts(products, page) {
    if (!productContainer) {
        console.error("Error: productContainer no encontrado.");
        return;
    }

    // Guardar la altura actual del contenedor para mantenerla durante la transición
    const currentHeight = productContainer.offsetHeight;
    if (currentHeight > 0) {
        productContainer.style.minHeight = currentHeight + 'px';
    }

    productContainer.innerHTML = ''; // Limpiar el contenedor antes de cargar
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p style="display:none;" class="product-price">${product.price}</p>
            <div class="product-actions">
                <button class="btn-detail" data-product-json='${JSON.stringify(product)}'>Ver Detalles</button>
                <button class="whatsapp-icon-btn" data-name="${product.name}" data-price="${product.price}">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon">
                </button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

    // Añadir listeners después de que los productos estén en el DOM
    addEventListenersToProductButtons();

    // Remover la altura mínima después de que los productos se hayan renderizado
    setTimeout(() => {
        productContainer.style.minHeight = '';
    }, 100);
}

function setupPagination(products, selectedFilter) {
    if (!paginationContainer) {
        console.error("Error: paginationContainer no encontrado.");
        return;
    }

    // Guardar los productos filtrados actuales para usar en la paginación
    currentFilteredProducts = products;

    paginationContainer.innerHTML = ''; // Limpiar la paginación existente
    const totalPages = Math.ceil(products.length / productsPerPage);

    if (totalPages <= 1) return; // No mostrar paginación si solo hay una página

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            currentPage = i; // Actualiza la página actual
            displayProducts(currentFilteredProducts, currentPage); // Usar los productos filtrados actuales
            
            // Actualizar el estado activo de los botones de paginación
            paginationContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            pageButton.classList.add('active');
            
            // Hacer el scroll DESPUÉS de actualizar el contenido
            setTimeout(() => {
                const productsSection = document.querySelector('.products');
                if (productsSection) {
                    productsSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 50);
        }, { passive: true });
        paginationContainer.appendChild(pageButton);
    }
}

function loadAndFilterProducts(filter, page = 1) {
    currentCategory = filter;
    currentPage = page;
    const filteredProducts = getFilteredProducts(filter);
    displayProducts(filteredProducts, currentPage);
    setupPagination(filteredProducts, filter);
}

// --- Event Listeners para los botones de producto (WhatsApp y Detalles) ---
function addEventListenersToProductButtons() {
    // Selector actualizado para el icono de WhatsApp en las tarjetas de producto
    document.querySelectorAll('.product-card .whatsapp-icon-btn').forEach(button => {
        // Asegúrate de que no haya listeners duplicados
        button.removeEventListener('click', handleWhatsAppClick); 
        button.addEventListener('click', handleWhatsAppClick, { passive: true });
    });

    // Listener para el botón "Ver Detalles" en las tarjetas de producto
    document.querySelectorAll('.product-card .btn-detail').forEach(button => {
        // Asegúrate de que no haya listeners duplicados
        button.removeEventListener('click', handleDetailClick); 
        button.addEventListener('click', handleDetailClick, { passive: true });
    });
}

// Funciones para manejar clics y evitar duplicados de listeners
function handleWhatsAppClick() {
    const productName = this.dataset.name;
    const productPrice = this.dataset.price;
    sendToWhatsApp(productName, productPrice);
}

function handleDetailClick() {
    // Parsear el JSON del dataset para obtener el objeto completo del producto
    try {
        const product = JSON.parse(this.dataset.productJson);
        openProductDetailModal(product);
    } catch (e) {
        console.error("Error al parsear el JSON del producto:", e);
    }
}

function sendToWhatsApp(productName, productPrice) {
    let message = `¡Hola! Estoy interesado/a en el siguiente producto de Detalles Laurel Medellín:\n\n*Producto:* ${productName}\n*Precio:* ${productPrice}\n`;
    let whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function openProductDetailModal(product) {
    if (!modalDetailImage || !modalDetailName || !modalDetailPrice || !modalDetailDescription || !modalDetailWhatsappBtn || !productDetailModal) {
        console.error("Error: Elementos del modal no encontrados.");
        return;
    }
    modalDetailImage.src = product.image;
    modalDetailImage.alt = product.name;
    modalDetailName.textContent = product.name;
    modalDetailPrice.textContent = product.price; 
    modalDetailDescription.textContent = product.description;
    
    // Actualizar los atributos data- para el botón de WhatsApp del modal
    modalDetailWhatsappBtn.setAttribute('data-name', product.name);
    modalDetailWhatsappBtn.setAttribute('data-price', product.price);

    productDetailModal.style.display = "flex"; 
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- Funcionalidad del Formulario de Contacto ---
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const submitButton = event.target.querySelector('.submit-button');
    const originalButtonText = submitButton.textContent;
    
    // Cambiar el texto del botón para mostrar que se está enviando
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Enviar el formulario usando fetch
    fetch('https://formspree.io/f/xdkdnjza', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Mostrar mensaje de éxito
            showFormMessage('¡Mensaje enviado exitosamente! Te responderemos pronto.', 'success');
            // Resetear el formulario
            event.target.reset();
        } else {
            throw new Error('Error en el envío');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showFormMessage('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
    })
    .finally(() => {
        // Restaurar el botón
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    });
}

function showFormMessage(message, type) {
    // Remover mensaje anterior si existe
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Crear el elemento del mensaje
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.textContent = message;
    
    // Insertar el mensaje después del formulario
    const form = document.querySelector('.contact-form');
    form.parentNode.insertBefore(messageElement, form.nextSibling);
    
    // Remover el mensaje después de 5 segundos
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.remove();
        }
    }, 5000);
}

// --- Funcionalidad de Animación de Escritura ---
function initTypewriterAnimation() {
    if (!typewriterTitle) return;
    
    const text = typewriterTitle.textContent;
    typewriterTitle.textContent = '';
    
    let i = 0;
    const typeSpeed = 80; // Velocidad de escritura más rápida en milisegundos
    
    // Hacer visible el título antes de comenzar la animación
    typewriterTitle.style.opacity = '1';
    
    function typeChar() {
        if (i < text.length) {
            typewriterTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, typeSpeed);
        } else {
            // Cuando termina la escritura, ocultar el cursor después de un tiempo
            setTimeout(() => {
                typewriterTitle.style.setProperty('--cursor-opacity', '0');
            }, 2000);
        }
    }
    
    // Iniciar la animación inmediatamente
    setTimeout(typeChar, 100);
}

// --- INICIALIZACIÓN DE TODO AL CARGAR EL DOM ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Eliminar el hash de la URL si existe
    if (window.location.hash) {
        window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
    // 2. Intentar forzar el scroll al inicio de la página con un pequeño retraso
    // Esto permite que el navegador primero aplique su propio scroll si lo tiene,
    // y luego nuestro script lo sobreescriba.
    setTimeout(() => {
        window.scrollTo(0, 0); 
        // También puedes probar con:
        // document.body.scrollIntoView({ behavior: 'auto', block: 'start' });
        // O si tienes un elemento con id="top" en la primera sección:
        // document.getElementById('top').scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 10); // Retraso de 10 milisegundos

    // 3. Inicializar referencias a elementos del DOM
    productContainer = document.getElementById("product-container");
    filterButtons = document.querySelectorAll(".filter-btn");
    categoryCards = document.querySelectorAll(".category-card"); 
    paginationContainer = document.getElementById("pagination-container");

    // Modal elements
    productDetailModal = document.getElementById("productModal"); 
    modalDetailImage = document.getElementById("modalDetailImage");
    modalDetailName = document.getElementById("modalDetailName");
    modalDetailPrice = document.getElementById("modalDetailPrice");
    modalDetailDescription = document.getElementById("modalDetailDescription");
    modalDetailWhatsappBtn = document.getElementById("modalDetailWhatsappBtn");
    closeModalButton = productDetailModal.querySelector(".close-button");

    // Scroll to top button
    scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', topFunction);
        window.onscroll = function() { scrollFunction() };
    }

    // Botón flotante de WhatsApp
    const floatingWhatsAppBtn = document.getElementById("floatingWhatsAppBtn");
    if (floatingWhatsAppBtn) {
        floatingWhatsAppBtn.addEventListener('click', function() {
            const message = "¡Hola! Me interesa obtener más información de Detalles Laurel Medellín.";
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }, { passive: true });
    }

    // Formulario de contacto
    contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Animación de escritura del título
    typewriterTitle = document.getElementById('typewriter-title');
    if (typewriterTitle) {
        initTypewriterAnimation();
    }

    // 4. Añadir Event Listeners para el modal (una vez)
    if (productDetailModal && closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            productDetailModal.style.display = "none";
        });

        window.addEventListener('click', (event) => {
            if (event.target == productDetailModal) {
                productDetailModal.style.display = "none";
            }
        });
    }

    // Listener para el botón de WhatsApp dentro del modal (una vez)
    if (modalDetailWhatsappBtn) {
        modalDetailWhatsappBtn.addEventListener('click', function() {
            const productName = this.dataset.name;
            const productPrice = this.dataset.price;
            sendToWhatsApp(productName, productPrice);
        }, { passive: true });
    }


    // 5. Añadir Event Listeners para los botones de filtro (una vez)
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filter = this.dataset.filter;
                loadAndFilterProducts(filter); 
                
                // Hacer el scroll DESPUÉS de actualizar el contenido
                setTimeout(() => {
                    const productsSection = document.querySelector('.products');
                    if (productsSection) {
                        productsSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 50);
            }, { passive: true });
        });
    }


    // 6. Añadir Event Listeners para las tarjetas de categoría (una vez)
    if (categoryCards.length > 0) {
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.dataset.category;

                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.filter === category) {
                        btn.classList.add('active');
                    }
                });
                loadAndFilterProducts(category); 
                
                // Hacer el scroll DESPUÉS de actualizar el contenido
                setTimeout(() => {
                    const productsSection = document.querySelector('.products');
                    if (productsSection) {
                        productsSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 50);
            }, { passive: true });
        });
    }

    // 7. Cargar todos los productos al cargar la página inicialmente
    loadAndFilterProducts('all');
});

// --- Deshabilitar herramientas de desarrollador (funcionalidad de protección) ---
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'J') ||
        (e.ctrlKey && e.key.toUpperCase() === 'U')) {
        e.preventDefault();
    }
});