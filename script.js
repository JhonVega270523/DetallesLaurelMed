// Script para la funcionalidad de la página (modales, botones, etc.)
        const productsData = {
            anchetas: [
                { name: "Ancheta Deluxe", image: "/images/ANCHETA.jpeg" },
                { name: "Ancheta Romántica", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Ancheta+Romantica" },
                { name: "Ancheta Frutal", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Ancheta+Frutal" },
                { name: "Ancheta Chocolates", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Ancheta+Chocolates" },
                { name: "Ancheta Personalizada", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Ancheta+Personalizada" },
                { name: "Ancheta de Cumpleaños", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Ancheta+Cumpleaños" },
                { name: "Ancheta de Aniversario", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Ancheta+Aniversario" },
                { name: "Ancheta Gourmet", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Ancheta+Gourmet" },
                { name: "Ancheta Infantil", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Ancheta+Infantil" },
                { name: "Ancheta Relax", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Ancheta+Relax" }
            ],
            ramos: [
                { name: "Ramo de Rosas Rojas", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Rosas+Rojas" },
                { name: "Ramo de Girasoles", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Girasoles" },
                { name: "Ramo Variado Pastel", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Variado+Pastel" },
                { name: "Ramo de Lirios", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Lirios" },
                { name: "Ramo de Orquídeas", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Orquideas" },
                { name: "Ramo de Tulipanes", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Tulipanes" },
                { name: "Ramo de Margaritas", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Margaritas" },
                { name: "Ramo Silvestre", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Silvestre" },
                { name: "Ramo Elegancia Blanca", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Elegancia+Blanca" },
                { name: "Ramo Exótico", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Exotico" }
            ],
            ramilletes: [
                { name: "Ramillete de Mini Rosas", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Mini+Rosas" },
                { name: "Ramillete de Claveles", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Claveles" },
                { name: "Ramillete Mixto Pequeño", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Mixto+Pequeño" },
                { name: "Ramillete de Lavanda", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Lavanda" },
                { name: "Ramillete de Alstroemerias", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Alstroemerias" },
                { name: "Ramillete de Eucalipto y Rosas", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Eucalipto+Rosas" },
                { name: "Ramillete de Crisantemos", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Crisantemos" },
                { name: "Ramillete Alegría", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Alegria" },
                { name: "Ramillete Suave", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Suave" },
                { name: "Ramillete de Campo", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Campo" }
            ],
            peluches: [
                { name: "Oso de Peluche Grande", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Oso+Grande" },
                { name: "Conejo de Peluche Suave", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Conejo" },
                { name: "Corazón de Peluche", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Corazon" },
                { name: "Perro de Peluche Tierno", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Perro" },
                { name: "Elefante de Peluche", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Elefante" },
                { name: "Peluches de Personajes", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Personajes" },
                { name: "Set de Mini Peluches", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Mini+Peluches" },
                { name: "Peluches con Mensaje", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Mensaje" },
                { name: "Peluches Musicales", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Musicales" },
                { name: "Peluches Temáticos", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Tematicos" }
            ],
            cajas: [
                { name: "Caja Sorpresa Dulce", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Caja+Dulce" },
                { name: "Caja con Rosas y Chocolates", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Rosas+Chocolates" },
                { name: "Caja de Experiencias", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Caja+Experiencias" },
                { name: "Caja Relax y Spa", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Caja+Relax" },
                { name: "Caja de Té y Galletas", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Caja+Te" },
                { name: "Caja de Maquillaje", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Maquillaje" },
                { name: "Caja de Vinos y Quesos", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Vinos+Quesos" },
                { name: "Caja de Cervezas Artesanales", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Cervezas" },
                { name: "Caja de Desayuno Especial", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Desayuno+Especial" },
                { name: "Caja de Regalo de Lujo", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Regalo+Lujo" }
            ],
            desayunos: [
                { name: "Desayuno Clásico", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Desayuno+Clasico" },
                { name: "Desayuno Saludable", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Desayuno+Saludable" },
                { name: "Desayuno Romántico", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Desayuno+Romantico" },
                { name: "Desayuno Infantil Temático", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Desayuno+Infantil" },
                { name: "Desayuno con Frutas y Jugo", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Frutas+Jugo" },
                { name: "Desayuno Americano", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Americano" },
                { name: "Desayuno Sorpresa de Cumpleaños", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Cumpleaños" },
                { name: "Desayuno de Aniversario", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Aniversario" },
                { name: "Desayuno Vegano", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Vegano" },
                { name: "Desayuno Premium", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Premium" }
            ],
            decoraciones: [
                { name: "Decoración Fiesta Cumpleaños", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Fiesta+Cumpleaños" },
                { name: "Decoración Romántica Habitación", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Habitacion+Romantica" },
                { name: "Decoración Jacuzzi con Pétalos", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Jacuzzi+Petalos" },
                { name: "Kit Decoración Aniversario", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Kit+Aniversario" },
                { name: "Globos Personalizados Fiesta", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Globos+Personalizados" },
                { name: "Luces LED para Ambiente", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Luces+Ambiente" },
                { name: "Velas Flotantes para Jacuzzi", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Velas+Jacuzzi" },
                { name: "Cortinas de Luces para Eventos", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Cortinas+Luces" },
                { name: "Guirnaldas Temáticas", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Guirnaldas+Tematicas" },
                { name: "Set de Accesorios para Jacuzzi", image: "https://via.placeholder.com/300x200/FFD1DC/666666?text=Accesorios+Jacuzzi" }
            ]
        };

        const modal = document.getElementById("productModal");
        const closeButton = document.querySelector(".close-button");
        const modalCategoryTitle = document.getElementById("modalCategoryTitle");
        const modalProductGrid = document.getElementById("modalProductGrid");
        const whatsappNumber = "573001234567"; // Asegúrate de que este número sea el correcto de WhatsApp
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        document.querySelectorAll('.btn-view-more').forEach(button => {
            button.addEventListener('click', function() {
                const category = this.dataset.category;
                const categoryName = this.parentNode.querySelector('h3').textContent;
                modalCategoryTitle.textContent = `Productos en ${categoryName}`;
                loadProductsIntoModal(category);
                modal.style.display = "flex";
            });
        });

        closeButton.addEventListener('click', function() {
            modal.style.display = "none";
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        function loadProductsIntoModal(category) {
            modalProductGrid.innerHTML = '';
            const products = productsData[category];
            if (products) {
                products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.classList.add('modal-product-card');
                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h5>${product.name}</h5>
                        <button class="btn-select-product" data-name="${product.name}" data-image="${product.image}">Me interesa</button>
                    `;
                    modalProductGrid.appendChild(productCard);
                });
                addWhatsAppListeners();
            }
        }

        function addWhatsAppListeners() {
            document.querySelectorAll('.btn-select-product').forEach(button => {
                button.addEventListener('click', function() {
                    const productName = this.dataset.name;
                    sendToWhatsApp(productName);
                });
            });
        }

        function sendToWhatsApp(productName) {
            let message = `¡Hola! Estoy interesado/a en el siguiente producto de Detalles Laurel Medellín:\n\n*Producto:* ${productName}\n`;
            let whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            
            alert(`Serás redirigido a WhatsApp para pedir información sobre "${productName}".`);
            window.open(whatsappUrl, '_blank');
        }
    
        // Deshabilitar el menú contextual (clic derecho)
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Deshabilitar teclas específicas para inspección
        document.addEventListener('keydown', function(e) {
            // Deshabilitar F12
            if (e.key === "F12") {
                e.preventDefault();
            }
            
            // Deshabilitar Ctrl+Shift+I (Inspeccionar)
            if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'I') {
                e.preventDefault();
            }

            // Deshabilitar Ctrl+Shift+J (Consola)
            if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'J') {
                e.preventDefault();
            }

            // Deshabilitar Ctrl+U (Ver código fuente)
            if (e.ctrlKey && e.key.toUpperCase() === 'U') {
                e.preventDefault();
            }
        });