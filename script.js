// Script para la funcionalidad de la página (modales, botones, etc.)

// ============================================
// LAZY LOADING DE IMÁGENES CON INTERSECTION OBSERVER
// ============================================
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            if (src) {
                img.src = src;
                img.onload = () => {
                    img.classList.add('loaded');
                };
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        }
    });
}, {
    rootMargin: '50px', // Comenzar a cargar 50px antes de que sea visible
    threshold: 0.01
});

// Función para observar una imagen con lazy loading
function observeImage(img) {
    if ('IntersectionObserver' in window) {
        imageObserver.observe(img);
    } else {
        // Fallback para navegadores antiguos
        const src = img.dataset.src;
        if (src) {
            img.src = src;
            img.classList.add('loaded');
        }
    }
}
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

// --- Lista completa de categorías (títulos visibles) ---
const categoryTitles = [
    '15 años',
    'Anchetas',
    'Aniversario',
    'Arreglos con Peluches',
    'Bouquet',
    'Cajas de Dulces',
    'Cajas de Lujo',
    'Decoración de Fiestas',
    'Decoración de Habitaciones',
    'Desayunos Sorpresa',
    'Detalles con Virgenes',
    'Detalles Empresariales',
    'Detalles Premium',
    'Fúnebres',
    'Nacimiento',
    'Oso Teddy',
    'Plantas de Orquídea',
    'Ramos',
    'Ramos con Dinero'
];

function slugify(text) {
    return text
        .toString()
        .normalize('NFD').replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

// Mapa de título de categoría -> archivo de imagen existente en /images
const categoryTitleToImage = {
    'Anchetas': 'Anchetas.jpeg',
    'Ramos': 'Ramos.jpeg',
    'Bouquet': 'Bouquet.jpeg',
    'Desayunos Sorpresa': 'Desayunos Sorpresa.jpeg',
    'Cajas de Dulces': 'Cajas de Dulces.jpeg',
    'Cajas de Lujo': 'Cajas de Lujo.jpeg',
    'Decoración de Fiestas': 'Decoración de Fiestas.jpeg',
    'Decoración de Habitaciones': 'Decoración de Habitaciones.jpeg',
    'Arreglos con Peluches': 'Arreglos con Peluches.jpeg',
    'Oso Teddy': 'Oso Teddy.jpeg'
};

function resolveCategoryImageByTitle(title) {
    const file = categoryTitleToImage[title];
    return file ? `images/${file}` : undefined;
}

// Mapa por clave de categoría existente
const categoryKeyToImage = {
    anchetas: 'images/Anchetas.jpeg',
    ramos: 'images/Ramos.jpeg',
    peluches: 'images/Arreglos con Peluches.jpeg',
    cajas: 'images/Cajas de Dulces.jpeg',
    desayunos: 'images/Desayunos Sorpresa.jpeg',
    decoraciones: 'images/Decoración de Fiestas.jpeg'
};

// Establece la imagen de un elemento <img> usando varias rutas de respaldo con lazy loading
function setImageSrcWithFallback(imgEl, product, useLazyLoading = false) {
    const candidates = [];
    if (product && product.image) candidates.push(product.image);
    if (product && product.categoryTitle) {
        const mapped = resolveCategoryImageByTitle(product.categoryTitle);
        if (mapped) candidates.push(mapped);
        ['.jpeg', '.jpg', '.png', '.webp'].forEach(ext => {
            candidates.push(`images/${encodeURIComponent(product.categoryTitle)}${ext}`);
        });
    }
    if (product && product.category && categoryKeyToImage[product.category]) {
        candidates.push(categoryKeyToImage[product.category]);
    }
    const uniqueCandidates = [...new Set(candidates.filter(Boolean))];
    let idx = 0;
    function loadNext() {
        if (idx >= uniqueCandidates.length) return;
        const src = uniqueCandidates[idx++];
        
        if (useLazyLoading) {
            // Usar data-src para lazy loading
            imgEl.dataset.src = src;
            imgEl.onerror = loadNext;
            observeImage(imgEl);
        } else {
            // Carga inmediata (para imágenes críticas)
            imgEl.onerror = loadNext;
            imgEl.src = src;
            imgEl.onload = () => {
                imgEl.classList.add('loaded');
            };
        }
    }
    loadNext();
}

// Genera productos temporales para categorías que no existen aún
function ensurePlaceholderProducts() {
    categoryTitles.forEach((title) => {
        const key = slugify(title);
        if (!productsData[key]) {
            // Crear 8 productos de prueba por categoría
            const basePrice = 50000; // COP
            productsData[key] = Array.from({ length: 12 }).map((_, idx) => {
                const priceValue = basePrice + idx * 5000;
                const priceStr = `$${priceValue.toLocaleString('es-CO')} COP`;
                return {
                    name: `${title} ${idx + 1}`,
                    price: priceStr,
                    description: `Producto temporal de la categoría ${title}.`,
                    category: key,
                    categoryTitle: title, // para resolver imagen según el nombre exacto
                    image: resolveCategoryImageByTitle(title)
                };
            });
        }
    });
}

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

// --- Asignar imágenes a categorías por nombre exacto con lazy loading ---
function assignCategoryImagesByExactTitle() {
    const cards = document.querySelectorAll('.category-card');
    if (!cards || cards.length === 0) return;

    cards.forEach((card, cardIndex) => {
        const wrapper = card.querySelector('.category-card-image-wrapper');
        const titleEl = card.querySelector('h3');
        if (!wrapper || !titleEl) return;

        const exactTitle = titleEl.textContent.trim();
        if (!exactTitle) return;

        const extensionsToTry = ['.jpeg', '.jpg', '.png', '.webp'];
        let extIndex = 0;
        const probe = new Image();

        function tryLoad() {
            if (extIndex >= extensionsToTry.length) return; // No se encontró ninguna imagen
            const encodedName = encodeURIComponent(exactTitle);
            const candidateSrc = `images/${encodedName}${extensionsToTry[extIndex]}`;

            probe.onload = () => {
                let existingImg = wrapper.querySelector('img');
                if (existingImg) {
                    // Usar lazy loading solo para categorías después de las primeras 5
                    if (cardIndex >= 5) {
                        existingImg.dataset.src = candidateSrc;
                        existingImg.alt = exactTitle;
                        observeImage(existingImg);
                    } else {
                        existingImg.src = candidateSrc;
                        existingImg.alt = exactTitle;
                        existingImg.onload = () => {
                            existingImg.classList.add('loaded');
                        };
                    }
                } else {
                    const img = document.createElement('img');
                    img.alt = exactTitle;
                    // Usar lazy loading solo para categorías después de las primeras 5
                    if (cardIndex >= 5) {
                        img.dataset.src = candidateSrc;
                        observeImage(img);
                    } else {
                        img.src = candidateSrc;
                        img.onload = () => {
                            img.classList.add('loaded');
                        };
                    }
                    wrapper.appendChild(img);
                }
            };
            probe.onerror = () => {
                extIndex++;
                tryLoad();
            };
            probe.src = candidateSrc;
        }

        tryLoad();
    });
}

// --- Actualiza el texto de los botones de detalle según el ancho de la ventana ---
function updateDetailButtonLabels() {
    const isMobile = window.innerWidth <= 480;
    document.querySelectorAll('.product-card .btn-detail').forEach(btn => {
        const shouldBe = isMobile ? 'Ver' : 'Ver Detalles';
        if (btn.textContent !== shouldBe) {
            btn.textContent = shouldBe;
        }
    });
}

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

    productsToDisplay.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Imagen con estrategia de fallbacks robusta
        const imgEl = document.createElement('img');
        imgEl.alt = product.name;
        // Lazy loading para productos después de los primeros 4 (primera fila)
        const useLazyLoading = index >= 4;
        setImageSrcWithFallback(imgEl, product, useLazyLoading);

        const titleEl = document.createElement('h3');
        titleEl.textContent = product.name;

        const pricePEl = document.createElement('p');
        pricePEl.className = 'product-price';
        pricePEl.style.display = 'none';
        pricePEl.textContent = product.price;

        const actionsEl = document.createElement('div');
        actionsEl.className = 'product-actions';

        const detailBtn = document.createElement('button');
        detailBtn.className = 'btn-detail';
        detailBtn.textContent = 'Ver Detalles';
        detailBtn.setAttribute('data-product-json', JSON.stringify(product));

        const waBtn = document.createElement('button');
        waBtn.className = 'whatsapp-icon-btn';
        waBtn.setAttribute('data-name', product.name);
        waBtn.setAttribute('data-price', product.price);
        const waImg = document.createElement('img');
        waImg.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
        waImg.alt = 'WhatsApp Icon';
        waBtn.appendChild(waImg);

        // Grupo izquierdo: botón y WhatsApp juntos
        const actionsLeft = document.createElement('div');
        actionsLeft.className = 'product-actions-left';
        actionsLeft.appendChild(detailBtn);
        actionsLeft.appendChild(waBtn);

        // Precio visible a la derecha de los botones
        const priceTagEl = document.createElement('span');
        priceTagEl.className = 'product-price-tag';
        const displayPrice = String(product.price || '').replace(/\s*COP\s*$/i, '');
        priceTagEl.textContent = displayPrice;

        actionsEl.appendChild(actionsLeft);
        actionsEl.appendChild(priceTagEl);

        productCard.appendChild(imgEl);
        productCard.appendChild(titleEl);
        productCard.appendChild(pricePEl);
        productCard.appendChild(actionsEl);

        productContainer.appendChild(productCard);
    });

    // Añadir listeners después de que los productos estén en el DOM
    addEventListenersToProductButtons();

    // Ajustar etiquetas de botones según el tamaño de pantalla
    updateDetailButtonLabels();

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
    let filteredProducts = getFilteredProducts(filter);

    // Aplicar orden por precio si corresponde
    const sortSelect = document.getElementById('priceSort');
    if (sortSelect) {
        const sortValue = sortSelect.value;
        if (sortValue === 'asc' || sortValue === 'desc') {
            filteredProducts = filteredProducts.slice().sort((a, b) => {
                const priceA = parseInt(String(a.price || '0').replace(/\D/g, '')) || 0;
                const priceB = parseInt(String(b.price || '0').replace(/\D/g, '')) || 0;
                return sortValue === 'asc' ? priceA - priceB : priceB - priceA;
            });
        }
    }
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
    // Fallbacks para la imagen del modal - carga inmediata sin lazy loading
    modalDetailImage.removeAttribute('src');
    modalDetailImage.classList.remove('loaded');
    modalDetailImage.alt = product.name;
    setImageSrcWithFallback(modalDetailImage, product, false); // false = carga inmediata
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

    // Cargar imágenes de categorías por nombre exacto si no tienen imagen
    assignCategoryImagesByExactTitle();

    // Asegurar productos temporales para todas las categorías
    ensurePlaceholderProducts();

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

    // Ajustar etiquetas de "Ver"/"Ver Detalles" al cargar y al redimensionar
    updateDetailButtonLabels();
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateDetailButtonLabels, 100);
    });

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

    // Listener de orden por precio
    const sortSelect = document.getElementById('priceSort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            loadAndFilterProducts(currentCategory || 'all', 1);
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