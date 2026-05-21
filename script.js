/* ============================================ */
/* ANANT INDUSTRIES - MAIN JS ENGINE           */
/* ============================================ */

(function () {
  "use strict";

  // ============================================
  // 1. GLOBAL STATE & CONFIGURATION
  // ============================================
  const App = {
    currentPage: "home",
    cart: [],
    products: [],
    testimonials: [],
    blogs: [],
    currentQuickViewProduct: null,
    isMobileMenuOpen: false,
    isCartOpen: false,
    isSearchOpen: false,
  };

  const WHATSAPP_NUMBER = "919636361369";

  // ============================================
  // 2. DATA: PRODUCTS
  // ============================================
  //   App.products = [
  //     // Herbal Juices
  //     {
  //       id: "amla-juice",
  //       name: "Amla Juice",
  //       category: "herbal-juices",
  //       image: "https://picsum.photos/seed/amla-juice/600/600.jpg",
  //       shortDesc:
  //         "Pure Indian Gooseberry extract rich in Vitamin C for immunity and digestion.",
  //       longDesc:
  //         "Our Amla Juice is made from premium quality Indian Gooseberries, cold-pressed to retain maximum nutritional value. It is a powerhouse of Vitamin C and antioxidants that boosts immunity, improves digestion, and promotes healthy skin and hair.",
  //       moq: 100,
  //       sizes: "500ml, 1L",
  //       ingredients: "Amla Extract, Preservatives",
  //     },
  //     {
  //       id: "aloe-vera-juice",
  //       name: "Aloe Vera Juice",
  //       category: "herbal-juices",
  //       image: "https://picsum.photos/seed/aloe-vera-juice/600/600.jpg",
  //       shortDesc: "Natural Aloe Vera pulp juice for digestion and skin health.",
  //       longDesc:
  //         "Extracted from organically grown Aloe Vera leaves, our Aloe Vera Juice supports healthy digestion, detoxifies the body, and enhances skin radiance. It contains over 75 active components including vitamins, minerals, and amino acids.",
  //       moq: 100,
  //       sizes: "500ml, 1L",
  //       ingredients: "Aloe Vera Pulp, Stabilizers",
  //     },
  //     {
  //       id: "triphala-juice",
  //       name: "Triphala Juice",
  //       category: "herbal-juices",
  //       image: "https://picsum.photos/seed/triphala-juice/600/600.jpg",
  //       shortDesc:
  //         "Traditional Ayurvedic blend of three fruits for detox and wellness.",
  //       longDesc:
  //         "Triphala Juice combines the power of Amla, Haritaki, and Bibhitaki. This ancient Ayurvedic formulation is known for its detoxifying properties, improving digestive health, and acting as a natural laxative.",
  //       moq: 100,
  //       sizes: "500ml, 1L",
  //       ingredients: "Amla, Haritaki, Bibhitaki Extracts",
  //     },
  //     {
  //       id: "wheatgrass-juice",
  //       name: "Wheatgrass Juice",
  //       category: "herbal-juices",
  //       image: "https://picsum.photos/seed/wheatgrass-juice/600/600.jpg",
  //       shortDesc:
  //         "Chlorophyll-rich wheatgrass for blood purification and energy.",
  //       longDesc:
  //         "Our Wheatgrass Juice is a potent source of chlorophyll, vitamins, and enzymes. It helps in blood purification, boosts metabolism, and provides a natural energy boost.",
  //       moq: 100,
  //       sizes: "500ml, 1L",
  //       ingredients: "Organic Wheatgrass Extract",
  //     },
  //     {
  //       id: "giloy-juice",
  //       name: "Giloy Juice",
  //       category: "herbal-juices",
  //       image: "https://picsum.photos/seed/giloy-juice/600/600.jpg",
  //       shortDesc:
  //         "Guduchi extract for strong immunity and chronic fever management.",
  //       longDesc:
  //         "Giloy (Tinospora Cordifolia) is known as Amrita in Ayurveda. Our Giloy Juice enhances immunity, helps manage chronic fever, and improves digestion.",
  //       moq: 100,
  //       sizes: "500ml, 1L",
  //       ingredients: "Giloy Stem Extract",
  //     },

  //     // Capsules & Tablets
  //     {
  //       id: "amla-capsule",
  //       name: "Amla Capsule",
  //       category: "capsules-tablets",
  //       image: "https://picsum.photos/seed/amla-capsule/600/600.jpg",
  //       shortDesc:
  //         "Concentrated Amla extract capsules for daily Vitamin C intake.",
  //       longDesc:
  //         "Amla Capsules provide a convenient way to consume the benefits of Indian Gooseberry. Each capsule contains concentrated Amla extract, rich in Vitamin C, promoting immunity, skin health, and iron absorption.",
  //       moq: 100,
  //       sizes: "60 Caps, 90 Caps",
  //       ingredients: "Amla Extract (Emblica Officinalis)",
  //     },
  //     {
  //       id: "ashwagandha-capsule",
  //       name: "Ashwagandha Capsule",
  //       category: "capsules-tablets",
  //       image: "https://picsum.photos/seed/ashwagandha-capsule/600/600.jpg",
  //       shortDesc: "KSM-66 Ashwagandha for stress relief and energy.",
  //       longDesc:
  //         "Our Ashwagandha Capsules feature KSM-66 extract, the most researched Ashwagandha globally. It helps reduce stress, enhance stamina, and improve overall vitality.",
  //       moq: 100,
  //       sizes: "60 Caps, 90 Caps",
  //       ingredients: "Ashwagandha Root Extract (Withania Somnifera)",
  //     },
  //     {
  //       id: "multivitamin-tablet",
  //       name: "Multivitamin Tablet",
  //       category: "capsules-tablets",
  //       image: "https://picsum.photos/seed/multivitamin-tablet/600/600.jpg",
  //       shortDesc:
  //         "Complete daily nutrition with essential vitamins and minerals.",
  //       longDesc:
  //         "A comprehensive multivitamin formulation providing 100% RDA of essential vitamins and minerals. Designed to fill nutritional gaps and support overall health.",
  //       moq: 100,
  //       sizes: "60 Tabs, 90 Tabs",
  //       ingredients: "Vitamin A, B-Complex, C, D, E, Zinc, Iron, Calcium",
  //     },
  //     {
  //       id: "turmeric-capsule",
  //       name: "Turmeric Capsule",
  //       category: "capsules-tablets",
  //       image: "https://picsum.photos/seed/turmeric-capsule/600/600.jpg",
  //       shortDesc:
  //         "Curcumin-rich turmeric extract with black pepper for joint health.",
  //       longDesc:
  //         "Our Turmeric Capsules contain 95% Curcuminoid extract enhanced with BioPerine (black pepper extract) for 2000% better absorption. Supports joint health and reduces inflammation.",
  //       moq: 100,
  //       sizes: "60 Caps",
  //       ingredients: "Turmeric Extract, BioPerine",
  //     },
  //     {
  //       id: "triphala-tablet",
  //       name: "Triphala Tablet",
  //       category: "capsules-tablets",
  //       image: "https://picsum.photos/seed/triphala-tablet/600/600.jpg",
  //       shortDesc: "Traditional Triphala formulation in convenient tablet form.",
  //       longDesc:
  //         "Triphala Tablets offer the ancient Ayurvedic detox formula in a convenient form. Supports digestive regularity, colon health, and gentle detoxification.",
  //       moq: 100,
  //       sizes: "60 Tabs, 120 Tabs",
  //       ingredients: "Amla, Haritaki, Bibhitaki Powder",
  //     },

  //     // Herbal Powders
  //     {
  //       id: "stem-cell-powder",
  //       name: "Stem Cell Powder",
  //       category: "herbal-powders",
  //       image: "https://picsum.photos/seed/stem-cell-powder/600/600.jpg",
  //       shortDesc:
  //         "Advanced herbal stem cell technology for anti-aging and rejuvenation.",
  //       longDesc:
  //         "Our Stem Cell Powder is an innovative formulation using plant stem cell technology. It helps in cellular regeneration, slows down the aging process, and promotes overall vitality.",
  //       moq: 100,
  //       sizes: "100g, 200g",
  //       ingredients: "Plant Stem Cell Extract, Herbs",
  //     },
  //     {
  //       id: "protein-powder",
  //       name: "Herbal Protein Powder",
  //       category: "herbal-powders",
  //       image: "https://picsum.photos/seed/protein-powder/600/600.jpg",
  //       shortDesc:
  //         "Plant-based protein blended with Ayurvedic herbs for muscle recovery.",
  //       longDesc:
  //         "A unique blend of high-quality plant proteins enhanced with Ayurvedic herbs like Ashwagandha and Shatavari. Supports muscle recovery, weight management, and provides sustained energy.",
  //       moq: 100,
  //       sizes: "200g, 500g, 1Kg",
  //       ingredients: "Soy Protein, Whey, Ashwagandha, Shatavari",
  //     },
  //     {
  //       id: "moringa-powder",
  //       name: "Moringa Powder",
  //       category: "herbal-powders",
  //       image: "https://picsum.photos/seed/moringa-powder/600/600.jpg",
  //       shortDesc:
  //         "Nutrient-dense Moringa Oleifera leaves for complete nutrition.",
  //       longDesc:
  //         "Made from shade-dried Moringa leaves, our Moringa Powder contains 90+ nutrients, 46 antioxidants, and all essential amino acids. A superfood for daily nutrition.",
  //       moq: 100,
  //       sizes: "100g, 250g",
  //       ingredients: "100% Organic Moringa Leaf Powder",
  //     },
  //     {
  //       id: "triphala-powder",
  //       name: "Triphala Churna",
  //       category: "herbal-powders",
  //       image: "https://picsum.photos/seed/triphala-powder/600/600.jpg",
  //       shortDesc: "Classical Ayurvedic Triphala churna for digestive health.",
  //       longDesc:
  //         "Our Triphala Churna is a classical Ayurvedic preparation made from equal parts of Amla, Haritaki, and Bibhitaki. It is the most trusted formulation for digestive health and detoxification.",
  //       moq: 100,
  //       sizes: "100g, 250g, 500g",
  //       ingredients: "Amla, Haritaki, Bibhitaki Powder",
  //     },

  //     // Drops & Syrups
  //     {
  //       id: "tulsi-drop",
  //       name: "Tulsi Drop",
  //       category: "drops-syrups",
  //       image: "https://picsum.photos/seed/tulsi-drop/600/600.jpg",
  //       shortDesc: "Concentrated Holy Basil drops for cough, cold, and immunity.",
  //       longDesc:
  //         "Tulsi Drops are made from the extract of 5 types of Holy Basil (Tulsi). It provides relief from cough, cold, and respiratory issues while boosting the immune system naturally.",
  //       moq: 100,
  //       sizes: "20ml, 30ml",
  //       ingredients: "Tulsi Extract (5 Variants)",
  //     },
  //     {
  //       id: "seabuckthorn-oil",
  //       name: "Sea Buckthorn Drop",
  //       category: "drops-syrups",
  //       image: "https://picsum.photos/seed/seabuckthorn/600/600.jpg",
  //       shortDesc:
  //         "Omega-7 rich Sea Buckthorn oil drops for skin and heart health.",
  //       longDesc:
  //         "Sea Buckthorn Drops are a rich source of Omega 3, 6, 9, and the rare Omega 7. It supports cardiovascular health, skin hydration, and mucous membrane health.",
  //       moq: 100,
  //       sizes: "10ml, 20ml",
  //       ingredients: "Sea Buckthorn Seed Oil, Pulp Oil",
  //     },
  //     {
  //       id: "herbal-cough-syrup",
  //       name: "Herbal Cough Syrup",
  //       category: "drops-syrups",
  //       image: "https://picsum.photos/seed/cough-syrup/600/600.jpg",
  //       shortDesc:
  //         "Honey-based herbal syrup for sore throat and persistent cough.",
  //       longDesc:
  //         "A soothing honey-based cough syrup formulated with Tulsi, Mulethi, and Ginger. Provides effective relief from sore throat, cough, and bronchial congestion without drowsiness.",
  //       moq: 100,
  //       sizes: "100ml, 200ml",
  //       ingredients: "Honey, Tulsi, Mulethi, Ginger Extract",
  //     },

  //     // Personal Care
  //     {
  //       id: "herbal-handwash",
  //       name: "Herbal Hand Wash",
  //       category: "personal-care",
  //       image: "https://picsum.photos/seed/herbal-handwash/600/600.jpg",
  //       shortDesc: "Neem and Aloe Vera infused antibacterial hand wash.",
  //       longDesc:
  //         "Our Herbal Hand Wash combines the antibacterial properties of Neem with the moisturizing benefits of Aloe Vera. It effectively cleanses hands without drying the skin.",
  //       moq: 100,
  //       sizes: "200ml, 500ml",
  //       ingredients: "Neem Extract, Aloe Vera, Triclosan-free",
  //     },
  //     {
  //       id: "herbal-sanitizer",
  //       name: "Herbal Sanitizer",
  //       category: "personal-care",
  //       image: "https://picsum.photos/seed/herbal-sanitizer/600/600.jpg",
  //       shortDesc: "Alcohol-based sanitizer with Tulsi and Lemon extracts.",
  //       longDesc:
  //         "A 70% alcohol-based sanitizer enriched with Tulsi and Lemon extracts. Kills 99.9% of germs while the herbal extracts keep your hands soft and fragrant.",
  //       moq: 100,
  //       sizes: "50ml, 100ml, 500ml",
  //       ingredients: "Ethanol, Tulsi Extract, Lemon Extract",
  //     },
  //     {
  //       id: "herbal-toothpaste",
  //       name: "Herbal Toothpaste",
  //       category: "personal-care",
  //       image: "https://picsum.photos/seed/herbal-toothpaste/600/600.jpg",
  //       shortDesc: "Fluoride-free Ayurvedic toothpaste with Clove and Mint.",
  //       longDesc:
  //         "A fluoride-free Ayurvedic toothpaste formulated with Clove, Mint, and Neem. Fights germs, prevents cavities, and provides long-lasting fresh breath.",
  //       moq: 100,
  //       sizes: "100g, 150g",
  //       ingredients: "Clove Oil, Mint, Neem Extract",
  //     },

  //     // Skin Care
  //     {
  //       id: "herbal-face-wash",
  //       name: "Herbal Face Wash",
  //       category: "skincare",
  //       image: "https://picsum.photos/seed/herbal-facewash/600/600.jpg",
  //       shortDesc: "Gentle foaming face wash with Tea Tree and Aloe Vera.",
  //       longDesc:
  //         "A sulfate-free gentle foaming face wash that deeply cleanses pores without stripping natural oils. Infused with Tea Tree oil for acne control and Aloe Vera for hydration.",
  //       moq: 100,
  //       sizes: "100ml, 150ml",
  //       ingredients: "Tea Tree Oil, Aloe Vera, Vitamin E",
  //     },
  //     {
  //       id: " fairness-cream",
  //       name: "Herbal Fairness Cream",
  //       category: "skincare",
  //       image: "https://picsum.photos/seed/fairness-cream/600/600.jpg",
  //       shortDesc: "Saffron and Turmeric enriched cream for natural glow.",
  //       longDesc:
  //         "An Ayurvedic fairness cream enriched with Saffron, Turmeric, and Sandalwood. It brightens the complexion, reduces dark spots, and provides SPF 20 protection.",
  //       moq: 100,
  //       sizes: "50g, 100g",
  //       ingredients: "Saffron Extract, Turmeric, Sandalwood Oil",
  //     },
  //     {
  //       id: "aloe-vera-gel",
  //       name: "Pure Aloe Vera Gel",
  //       category: "skincare",
  //       image: "https://picsum.photos/seed/aloe-gel/600/600.jpg",
  //       shortDesc: "Multipurpose 92% pure Aloe Vera gel for skin and hair.",
  //       longDesc:
  //         "A multipurpose gel containing 92% pure Aloe Vera. It soothes sunburns, moisturizes skin, treats acne, and can be used as a hair styling gel.",
  //       moq: 100,
  //       sizes: "100ml, 200ml",
  //       ingredients: "92% Aloe Vera Gel, Vitamin E",
  //     },

  //     // Hair Care
  //     {
  //       id: "herbal-shampoo",
  //       name: "Herbal Shampoo",
  //       category: "hair-care",
  //       image: "https://picsum.photos/seed/herbal-shampoo/600/600.jpg",
  //       shortDesc:
  //         "Sulfate-free shampoo with Bhringraj and Amla for strong hair.",
  //       longDesc:
  //         "A sulfate-free and paraben-free shampoo formulated with Bhringraj, Amla, and Shikakai. It cleanses gently, reduces hair fall, and promotes lustrous, thick hair.",
  //       moq: 100,
  //       sizes: "200ml, 500ml",
  //       ingredients: "Bhringraj Extract, Amla, Shikakai",
  //     },
  //     {
  //       id: "herbal-hair-oil",
  //       name: "Herbal Hair Oil",
  //       category: "hair-care",
  //       image: "https://picsum.photos/seed/herbal-hair-oil/600/600.jpg",
  //       shortDesc:
  //         "Traditional Ayurvedic hair oil with 18 herbs for hair growth.",
  //       longDesc:
  //         "An authentic Ayurvedic hair oil infused with 18 potent herbs including Bhringraj, Brahmi, and Amla in a Coconut and Sesame oil base. Deeply nourishes scalp, reduces premature graying, and promotes hair growth.",
  //       moq: 100,
  //       sizes: "100ml, 200ml, 500ml",
  //       ingredients: "Coconut Oil, Sesame Oil, 18 Herb Extracts",
  //     },
  //     {
  //       id: "herbal-conditioner",
  //       name: "Herbal Conditioner",
  //       category: "hair-care",
  //       image: "https://picsum.photos/seed/herbal-conditioner/600/600.jpg",
  //       shortDesc: "Argan oil and Hibiscus conditioner for smooth, silky hair.",
  //       longDesc:
  //         "A deeply nourishing conditioner enriched with Argan Oil and Hibiscus Extract. It detangles hair, reduces frizz, and leaves hair soft, smooth, and manageable.",
  //       moq: 100,
  //       sizes: "200ml",
  //       ingredients: "Argan Oil, Hibiscus Extract, Keratin",
  //     },
  //   ];
  App.products = [
    {
      id: "amla-capsule",
      name: "Amla Capsule",
      category: "capsules-tablets",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/amla_capsule.png",
      shortDesc:
        "Herbal Amla capsules rich in Vitamin C for immunity and wellness.",
      longDesc:
        "Amla Capsule is formulated using premium quality Indian Gooseberry extract to support immunity, digestion, and overall health naturally.",
      moq: 100,
      sizes: "60 Capsules",
      ingredients: "Amla Extract",
    },

    {
      id: "amla-juice",
      name: "Amla Juice",
      category: "herbal-juices",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/amla_juice.png",
      shortDesc: "Natural Amla juice packed with antioxidants and Vitamin C.",
      longDesc:
        "Amla Juice helps improve digestion, immunity, and skin health with the goodness of natural Indian Gooseberry extract.",
      moq: 100,
      sizes: "500ml, 1L",
      ingredients: "Amla Extract",
    },

    {
      id: "kids-growth-powder",
      name: "Kids Growth Powder",
      category: "herbal-powders",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/kids_growth_powder.png",
      shortDesc:
        "Nutritional herbal powder designed for kids growth and development.",
      longDesc:
        "Kids Growth Powder contains essential nutrients and herbal ingredients to support healthy growth, immunity, and overall development in children.",
      moq: 100,
      sizes: "200g, 500g",
      ingredients: "Herbal Extracts, Vitamins, Minerals",
    },

    {
      id: "anti-addiction-drop",
      name: "Anti Addiction Drop",
      category: "drops-syrups",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/anti_addiction_drop.png",
      shortDesc:
        "Ayurvedic herbal drops formulated to support addiction management.",
      longDesc:
        "Anti Addiction Drop is made using herbal extracts traditionally used to help reduce dependency and support mental wellness naturally.",
      moq: 100,
      sizes: "30ml",
      ingredients: "Herbal Extracts",
    },

    {
      id: "arjun-powder",
      name: "Arjun Powder",
      category: "herbal-powders",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/arjun_powder.png",
      shortDesc:
        "Traditional Ayurvedic Arjun powder for heart and wellness support.",
      longDesc:
        "Arjun Powder is prepared using premium quality Arjuna bark known in Ayurveda for supporting cardiovascular wellness.",
      moq: 100,
      sizes: "100g, 250g",
      ingredients: "Arjuna Bark Powder",
    },

    {
      id: "tulsi-drop",
      name: "Tulsi Drop",
      category: "drops-syrups",
      image: "https://anantindustries.com/assets/img/product/DropsLabel.png",
      shortDesc:
        "Concentrated Tulsi drops for immunity and respiratory support.",
      longDesc:
        "Tulsi Drop is enriched with Holy Basil extract known for helping improve immunity and respiratory wellness naturally.",
      moq: 100,
      sizes: "20ml, 30ml",
      ingredients: "Tulsi Extract",
    },

    {
      id: "jamun-juice",
      name: "Jamun Juice",
      category: "herbal-juices",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/jamun_juice.png",
      shortDesc:
        "Herbal Jamun juice traditionally used for sugar management support.",
      longDesc:
        "Jamun Juice contains natural Jamun fruit extract known in Ayurveda for supporting metabolism and maintaining wellness.",
      moq: 100,
      sizes: "500ml, 1L",
      ingredients: "Jamun Extract",
    },

    {
      id: "joint-care-capsule",
      name: "Joint Care Capsule",
      category: "capsules-tablets",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/joint_care_capsule.png",
      shortDesc:
        "Ayurvedic joint care capsules for flexibility and mobility support.",
      longDesc:
        "Joint Care Capsule combines herbal ingredients traditionally used to support joint comfort and mobility naturally.",
      moq: 100,
      sizes: "60 Capsules",
      ingredients: "Herbal Joint Care Blend",
    },

    {
      id: "lady-care-drop",
      name: "Lady Care Drop",
      category: "drops-syrups",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/lady_care_drop.png",
      shortDesc:
        "Herbal wellness drops specially formulated for women's health.",
      longDesc:
        "Lady Care Drop contains Ayurvedic herbal extracts designed to support women’s wellness and hormonal balance naturally.",
      moq: 100,
      sizes: "30ml",
      ingredients: "Herbal Extracts",
    },

    {
      id: "lady-care-capsule",
      name: "Lady Care Capsule",
      category: "capsules-tablets",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/lady_care_capsule.png",
      shortDesc: "Herbal capsules designed to support women's daily wellness.",
      longDesc:
        "Lady Care Capsule is formulated using Ayurvedic herbs traditionally used for women’s health and vitality support.",
      moq: 100,
      sizes: "60 Capsules",
      ingredients: "Ayurvedic Herbal Blend",
    },

    {
      id: "multivitamin-capsule",
      name: "Multivitamin Capsule",
      category: "capsules-tablets",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/multivitamin_capsule.png",
      shortDesc:
        "Daily multivitamin herbal capsules for overall health support.",
      longDesc:
        "Multivitamin Capsule provides essential nutrients and herbal ingredients to support immunity, energy, and wellness.",
      moq: 100,
      sizes: "60 Capsules",
      ingredients: "Vitamins, Minerals, Herbal Extracts",
    },

    {
      id: "man-power-capsule",
      name: "Man Power Capsule",
      category: "capsules-tablets",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/man_power_capsule.png",
      shortDesc:
        "Ayurvedic vitality capsules formulated for men's wellness support.",
      longDesc:
        "Man Power Capsule contains herbal ingredients traditionally used to support stamina, strength, and vitality.",
      moq: 100,
      sizes: "60 Capsules",
      ingredients: "Safed Musli, Ashwagandha, Herbs",
    },

    {
      id: "moringa-drop",
      name: "Moringa Drop",
      category: "drops-syrups",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/moringa_drop.png",
      shortDesc:
        "Nutrient-rich Moringa drops for daily nutrition and wellness.",
      longDesc:
        "Moringa Drop is made using concentrated Moringa extract known for its rich nutritional profile and antioxidant benefits.",
      moq: 100,
      sizes: "30ml",
      ingredients: "Moringa Extract",
    },

    {
      id: "noni-drop",
      name: "Noni Drop",
      category: "drops-syrups",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/noni_drop.png",
      shortDesc: "Herbal Noni drops for immunity and energy support.",
      longDesc:
        "Noni Drop contains natural Noni fruit extract known for its antioxidant and wellness-supporting properties.",
      moq: 100,
      sizes: "30ml",
      ingredients: "Noni Extract",
    },

    {
      id: "noni-juice",
      name: "Noni Juice",
      category: "herbal-juices",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/noni_juice.png",
      shortDesc: "Natural Noni juice for immunity and overall wellness.",
      longDesc:
        "Noni Juice is prepared using premium Noni fruit extract traditionally valued for supporting immunity and vitality.",
      moq: 100,
      sizes: "500ml, 1L",
      ingredients: "Noni Fruit Extract",
    },

    {
      id: "piles-capsule",
      name: "Piles Capsule",
      category: "capsules-tablets",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/piles_capsule.png",
      shortDesc:
        "Ayurvedic herbal capsules formulated for piles management support.",
      longDesc:
        "Piles Capsule combines traditional Ayurvedic herbs known to support digestive health and provide comfort naturally.",
      moq: 100,
      sizes: "60 Capsules",
      ingredients: "Ayurvedic Herbs",
    },

    {
      id: "protein-powder",
      name: "Protein Powder",
      category: "herbal-powders",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/protein_powder.png",
      shortDesc: "Herbal protein powder for strength, recovery, and nutrition.",
      longDesc:
        "Protein Powder is blended with herbal and nutritional ingredients to support muscle recovery and overall fitness.",
      moq: 100,
      sizes: "200g, 500g, 1Kg",
      ingredients: "Protein Blend, Herbal Extracts",
    },

    {
      id: "safed-musli",
      name: "Safed Musli",
      category: "herbal-powders",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/safed_musli.png",
      shortDesc: "Premium Safed Musli herbal powder for vitality and stamina.",
      longDesc:
        "Safed Musli is a well-known Ayurvedic herb traditionally used for strength, stamina, and wellness support.",
      moq: 100,
      sizes: "100g, 250g",
      ingredients: "Safed Musli Powder",
    },

    {
      id: "sea-buckthorn",
      name: "Sea Buckthorn",
      category: "drops-syrups",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/sea_buckthorn.png",
      shortDesc: "Sea Buckthorn herbal formulation rich in Omega nutrients.",
      longDesc:
        "Sea Buckthorn supports skin, heart, and immune health with naturally occurring antioxidants and Omega fatty acids.",
      moq: 100,
      sizes: "30ml",
      ingredients: "Sea Buckthorn Extract",
    },

    {
      id: "stem-cell-powder",
      name: "Stem Cell Powder",
      category: "herbal-powders",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/stem_cell_powder.png",
      shortDesc:
        "Advanced herbal stem cell formulation for rejuvenation support.",
      longDesc:
        "Stem Cell Powder is formulated using herbal ingredients designed to support wellness, vitality, and rejuvenation naturally.",
      moq: 100,
      sizes: "100g, 200g",
      ingredients: "Plant Stem Cell Extracts, Herbs",
    },

    {
      id: "stone-care",
      name: "Stone Care",
      category: "capsules-tablets",
      image:
        "https://raw.githubusercontent.com/rolsex946/annand/refs/heads/main/stone_care.png",
      shortDesc:
        "Ayurvedic herbal formulation for kidney and urinary wellness.",
      longDesc:
        "Stone Care contains traditional Ayurvedic herbs used to support urinary health and kidney wellness naturally.",
      moq: 100,
      sizes: "60 Capsules",
      ingredients: "Herbal Extracts",
    },

    {
      id: "triphala-juice",
      name: "Triphala Juice",
      category: "herbal-juices",
      image: "https://anantindustries.com/assets/img/product/triphala.png",
      shortDesc: "Traditional Triphala juice for digestion and detox support.",
      longDesc:
        "Triphala Juice combines Amla, Haritaki, and Bibhitaki to support digestive wellness and natural detoxification.",
      moq: 100,
      sizes: "500ml, 1L",
      ingredients: "Triphala Extract",
    },

    {
      id: "triple-stemcell-powder",
      name: "Triple Stemcell Powder",
      category: "herbal-powders",
      image:
        "https://anantindustries.com/assets/img/product/triple_sremcell_powder.png",
      shortDesc:
        "Triple-action herbal stem cell powder for vitality and wellness.",
      longDesc:
        "Triple Stemcell Powder is formulated with advanced herbal ingredients designed to support rejuvenation and daily wellness.",
      moq: 100,
      sizes: "100g, 200g",
      ingredients: "Stem Cell Herbal Blend",
    },
  ];

  // ============================================
  // 3. DATA: BLOGS
  // ============================================
  //   App.blogs = [
  //     {
  //       id: "benefits-of-amla",
  //       title: "10 Incredible Health Benefits of Amla",
  //       category: "ayurvedic-benefits",
  //       image:
  //         "https://www.srisritattva.com/cdn/shop/articles/12-health-benefits-of-amla-juice_-_Sri-Sri-Tattva.png?v=1708582005",
  //       excerpt:
  //         "Discover why Amla (Indian Gooseberry) has been a cornerstone of Ayurvedic medicine for centuries and how it can boost your immunity.",
  //       date: "Jan 15, 2025",
  //       content: `<p>Amla, or Indian Gooseberry, is one of the most powerful fruits in Ayurveda. Rich in Vitamin C and antioxidants, it offers numerous health benefits.</p><h2>1. Boosts Immunity</h2><p>Amla is a rich source of Vitamin C, which enhances the production of white blood cells, helping the body fight off infections.</p><h2>2. Improves Digestion</h2><p>The fiber in Amla helps regulate bowel movements and acts as a natural laxative, promoting a healthy gut.</p><h2>3. Enhances Skin Health</h2><p>The antioxidants in Amla fight free radicals, reducing signs of aging and promoting a radiant complexion.</p><h2>4. Promotes Hair Growth</h2><p>Amla oil and juice are known to strengthen hair follicles, reduce premature graying, and promote thick, lustrous hair.</p>`,
  //     },
  //     {
  //       id: "third-party-manufacturing-guide",
  //       title: "The Ultimate Guide to Third Party Manufacturing in India",
  //       category: "private-label",
  //       image:
  //         "https://www.planetayurveda.com/wp-content/uploads/2022/12/planet-ayurveda-third-party-manufacturing-1.jpg",
  //       excerpt:
  //         "Looking to start your own herbal brand? Learn how third-party manufacturing can help you launch without setting up a factory.",
  //       date: "Feb 05, 2025",
  //       content: `<p>Starting a herbal brand doesn't require a multi-crore factory investment. Third-party manufacturing allows you to focus on marketing while experts handle production.</p><h2>What is Third Party Manufacturing?</h2><p>It's a business model where a manufacturer produces goods under your brand name. You provide the specifications, and they handle the formulation, production, and packaging.</p><h2>Benefits</h2><p>Low MOQ, zero infrastructure cost, expert formulation, and compliance handling are just a few benefits.</p>`,
  //     },
  //     {
  //       id: "ashwagandha-benefits",
  //       title: "Why Ashwagandha is the King of Ayurvedic Herbs",
  //       category: "herbal-ingredients",
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4zckAioDJ2L_oHM14I-kEDhXlYuMjyOwMw&s",
  //       excerpt:
  //         "Explore the science-backed benefits of Ashwagandha, from stress relief to enhanced athletic performance.",
  //       date: "Mar 12, 2025",
  //       content: `<p>Ashwagandha (Withania Somnifera) is an adaptogenic herb that has been used in Ayurveda for over 3,000 years. Modern science is now validating its incredible benefits.</p><h2>Stress & Anxiety Relief</h2><p>Studies show Ashwagandha can reduce cortisol levels by up to 30%, significantly lowering stress and anxiety.</p><h2>Enhanced Strength & Stamina</h2><p>It boosts VO2 max and muscle strength, making it a favorite among athletes.</p>`,
  //     },
  //     {
  //       id: "private-label-tips",
  //       title: "5 Tips for Launching a Successful Private Label Brand",
  //       category: "private-label",
  //       image:
  //         "https://www.slideteam.net/media/catalog/product/cache/1280x720/k/e/key_steps_for_building_private_label_private_labelling_techniques_slide01.jpg",
  //       excerpt:
  //         "From packaging design to market positioning, here are the key strategies for a successful private label launch.",
  //       date: "Apr 01, 2025",
  //       content: `<p>Launching a private label brand in the herbal space is exciting but requires strategic planning. Here are 5 tips to ensure success.</p><h2>1. Niche Selection</h2><p>Don't try to be everything to everyone. Start with a specific niche like herbal hair care or immunity boosters.</p><h2>2. Premium Packaging</h2><p>Consumers judge products by their packaging. Invest in high-quality design and eco-friendly materials.</p>`,
  //     },
  //     {
  //       id: "immunity-wellness",
  //       title: "Top 5 Ayurvedic Practices for Daily Wellness",
  //       category: "wellness",
  //       image:
  //         "https://ayurvedaone.co.in/wp-content/uploads/2026/03/Top-7-Ayurvedic-Detox-Treatments-Banner.webp",
  //       excerpt:
  //         "Incorporate these simple Ayurvedic practices into your daily routine for improved immunity and overall well-being.",
  //       date: "May 20, 2025",
  //       content: `<p>Ayurveda emphasizes prevention over cure. Incorporating simple daily practices can drastically improve your quality of life.</p><h2>1. Oil Pulling</h2><p>Swishing sesame or coconut oil for 10 minutes daily detoxifies the mouth and improves oral health.</p><h2>2. Drinking Warm Water</h2><p>Warm water aids digestion and flushes out toxins (Ama) from the system.</p>`,
  //     },
  //   ];

  App.blogs = [
    {
      id: "benefits-of-amla",
      title: "10 Incredible Health Benefits of Amla",
      category: "ayurvedic-benefits",
      image:
        "https://www.srisritattva.com/cdn/shop/articles/12-health-benefits-of-amla-juice_-_Sri-Sri-Tattva.png?v=1708582005",
      excerpt:
        "Discover why Amla (Indian Gooseberry) has been a cornerstone of Ayurvedic medicine for centuries and how it can boost your immunity.",
      date: "Jan 15, 2025",
      content: `<p>Amla, also known as Indian Gooseberry, is one of the most powerful and revered fruits in Ayurveda. It has been used for thousands of years in traditional Indian medicine due to its exceptional healing, rejuvenating, and immunity-boosting properties. It is considered a natural Rasayana (rejuvenator), which means it helps promote longevity, youthfulness, and overall vitality.</p>

<h2>1. Powerful Immunity Booster</h2>
<p>Amla is one of the richest natural sources of Vitamin C, which plays a key role in strengthening the immune system. It helps the body produce more white blood cells, which are essential for fighting infections, viruses, and harmful bacteria. Regular consumption of Amla juice or powder can significantly improve resistance against seasonal illnesses.</p>

<h2>2. Supports Healthy Digestion</h2>
<p>Amla stimulates gastric juices and improves nutrient absorption in the digestive tract. Its high fiber content helps regulate bowel movements and prevents issues like constipation, acidity, and bloating. In Ayurveda, it is known to balance Pitta dosha, which is responsible for digestive fire.</p>

<h2>3. Enhances Skin Glow and Anti-Aging</h2>
<p>The antioxidants present in Amla help fight free radicals, which are responsible for premature aging. It reduces wrinkles, fine lines, and dullness while promoting collagen production. This results in naturally glowing, youthful, and healthy skin over time.</p>

<h2>4. Strengthens Hair and Prevents Graying</h2>
<p>Amla is widely used in hair oils and shampoos due to its ability to strengthen hair follicles from the root. It reduces hair fall, promotes new hair growth, and helps delay premature graying. Regular application of Amla oil improves scalp health and adds natural shine to hair.</p>

<h2>5. Improves Heart Health</h2>
<p>Amla helps regulate cholesterol levels by reducing bad LDL cholesterol and increasing good HDL cholesterol. It also improves blood circulation and strengthens blood vessels, reducing the risk of heart diseases and hypertension.</p>

<h2>6. Controls Blood Sugar Levels</h2>
<p>Amla has natural hypoglycemic properties that help regulate blood sugar levels. It improves insulin sensitivity, making it beneficial for people with diabetes or those at risk of developing it.</p>

<h2>7. Detoxifies the Body</h2>
<p>Amla acts as a natural detoxifier by flushing out toxins from the liver and kidneys. It supports healthy liver function and helps cleanse the digestive system, improving overall energy levels and vitality.</p>

<h2>8. Boosts Eye Health</h2>
<p>Rich in Vitamin A and antioxidants, Amla improves eyesight and reduces the risk of cataracts and age-related vision decline. It also helps reduce eye strain caused by excessive screen exposure.</p>

<h2>9. Enhances Brain Function</h2>
<p>Amla supports cognitive health by improving memory, focus, and mental clarity. It nourishes brain cells and helps reduce stress and mental fatigue.</p>

<h2>10. Improves Metabolism and Weight Management</h2>
<p>Amla boosts metabolism, helping the body burn calories more efficiently. It also reduces fat accumulation and supports healthy weight management when combined with a balanced diet.</p>

<p>Incorporating Amla into daily life through juice, capsules, or powder form can bring long-term health benefits and significantly improve overall wellness.</p>`,
    },

    {
      id: "third-party-manufacturing-guide",
      title: "The Ultimate Guide to Third Party Manufacturing in India",
      category: "private-label",
      image:
        "https://www.planetayurveda.com/wp-content/uploads/2022/12/planet-ayurveda-third-party-manufacturing-1.jpg",
      excerpt:
        "Looking to start your own herbal brand? Learn how third-party manufacturing can help you launch without setting up a factory.",
      date: "Feb 05, 2025",
      content: `<p>Third-party manufacturing has become one of the fastest-growing business models in India’s herbal and Ayurvedic industry. It allows entrepreneurs to launch their own brand without investing in production infrastructure.</p>

<h2>What is Third Party Manufacturing?</h2>
<p>It is a business arrangement where a specialized manufacturer produces products under your brand name. You provide the formula, branding, and requirements, while the manufacturer handles production, packaging, and compliance.</p>

<h2>How the Process Works</h2>
<p>The process begins with selecting product formulations, followed by sample approvals. Once finalized, bulk production begins in certified facilities that comply with GMP and AYUSH standards.</p>

<h2>Major Advantages</h2>
<p>It significantly reduces startup costs since you don’t need to build a factory. It also ensures access to experienced formulators, quality raw materials, and standardized production processes.</p>

<h2>Low Investment, High Scalability</h2>
<p>Entrepreneurs can start with low minimum order quantities (MOQs) and gradually scale their business based on demand without worrying about production capacity.</p>

<h2>Branding and Market Control</h2>
<p>You retain full control over branding, packaging design, pricing, and marketing strategy, allowing you to build a unique identity in the market.</p>

<h2>Regulatory Compliance</h2>
<p>Manufacturers handle most of the regulatory requirements including licenses, certifications, and quality control testing, making the process easier for new businesses.</p>

<p>Overall, third-party manufacturing is a powerful model for anyone looking to enter the Ayurvedic industry with minimal risk and maximum scalability.</p>`,
    },

    {
      id: "ashwagandha-benefits",
      title: "Why Ashwagandha is the King of Ayurvedic Herbs",
      category: "herbal-ingredients",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4zckAioDJ2L_oHM14I-kEDhXlYuMjyOwMw&s",
      excerpt:
        "Explore the science-backed benefits of Ashwagandha, from stress relief to enhanced athletic performance.",
      date: "Mar 12, 2025",
      content: `<p>Ashwagandha (Withania somnifera) is one of the most powerful adaptogenic herbs in Ayurveda. It has been used for over 3,000 years to promote strength, vitality, and stress resilience.</p>

<h2>Stress and Cortisol Reduction</h2>
<p>Ashwagandha is widely known for its ability to reduce cortisol levels, the hormone responsible for stress. Regular use helps calm the nervous system and promotes emotional stability.</p>

<h2>Improves Sleep Quality</h2>
<p>It naturally supports deeper and more restful sleep by calming the mind and reducing anxiety-related insomnia.</p>

<h2>Boosts Physical Performance</h2>
<p>Athletes use Ashwagandha to improve strength, endurance, and muscle recovery. It enhances oxygen utilization and improves overall stamina.</p>

<h2>Supports Brain Function</h2>
<p>Ashwagandha enhances memory, focus, and cognitive function by protecting brain cells from oxidative stress and degeneration.</p>

<h2>Balances Hormones</h2>
<p>It helps regulate thyroid and adrenal function, supporting hormonal balance in both men and women.</p>

<h2>Improves Immunity</h2>
<p>By reducing inflammation and oxidative stress, Ashwagandha strengthens the immune system and helps the body resist infections.</p>

<p>Modern scientific studies continue to validate its traditional reputation as one of the most effective herbal adaptogens available today.</p>`,
    },

    {
      id: "private-label-tips",
      title: "5 Tips for Launching a Successful Private Label Brand",
      category: "private-label",
      image:
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/k/e/key_steps_for_building_private_label_private_labelling_techniques_slide01.jpg",
      excerpt:
        "From packaging design to market positioning, here are the key strategies for a successful private label launch.",
      date: "Apr 01, 2025",
      content: `<p>Starting a private label brand in the herbal industry can be highly profitable if done strategically. It requires careful planning, branding, and product positioning.</p>

<h2>1. Choose a Focused Niche</h2>
<p>Instead of launching many unrelated products, focus on a specific niche like immunity boosters, hair care, or digestive wellness. This helps build authority and customer trust.</p>

<h2>2. Invest in Premium Packaging</h2>
<p>Packaging plays a major role in customer perception. High-quality, eco-friendly, and attractive packaging increases perceived product value and brand recognition.</p>

<h2>3. Work with Reliable Manufacturers</h2>
<p>Select GMP-certified and experienced manufacturers to ensure consistent product quality, safety, and regulatory compliance.</p>

<h2>4. Build Strong Branding</h2>
<p>Your brand identity, including logo, colors, and messaging, should clearly communicate trust, purity, and effectiveness.</p>

<h2>5. Focus on Digital Marketing</h2>
<p>Use social media, influencer marketing, and SEO to reach your target audience. Educating customers about your products builds long-term loyalty.</p>

<p>With the right strategy, a private label herbal brand can grow rapidly in today’s wellness-focused market.</p>`,
    },

    {
      id: "immunity-wellness",
      title: "Top 5 Ayurvedic Practices for Daily Wellness",
      category: "wellness",
      image:
        "https://ayurvedaone.co.in/wp-content/uploads/2026/03/Top-7-Ayurvedic-Detox-Treatments-Banner.webp",
      excerpt:
        "Incorporate these simple Ayurvedic practices into your daily routine for improved immunity and overall well-being.",
      date: "May 20, 2025",
      content: `<p>Ayurveda focuses on maintaining health by balancing the body, mind, and spirit. Daily routines (Dinacharya) play a crucial role in preventing disease and promoting long-term wellness.</p>

<h2>1. Oil Pulling (Gandusha)</h2>
<p>Oil pulling involves swishing natural oils like sesame or coconut oil in the mouth for 10–15 minutes. It helps remove toxins, improves oral hygiene, and strengthens gums and teeth.</p>

<h2>2. Drinking Warm Water</h2>
<p>Warm water helps activate digestion, flush toxins (Ama), and improve metabolic activity. It is especially beneficial when consumed in the morning.</p>

<h2>3. Early Morning Routine</h2>
<p>Waking up early aligns the body with natural circadian rhythms. It improves energy levels, mental clarity, and productivity throughout the day.</p>

<h2>4. Balanced Diet</h2>
<p>Ayurveda emphasizes fresh, seasonal, and natural foods. Avoiding processed foods helps maintain dosha balance and improves overall health.</p>

<h2>5. Meditation and Breathing Exercises</h2>
<p>Practicing meditation and Pranayama reduces stress, improves focus, and strengthens mental health.</p>

<p>Incorporating these simple habits daily can significantly improve immunity, digestion, and overall well-being.</p>`,
    },
  ];

  // ============================================
  // 4. DOM SELECTORS CACHE
  // ============================================
  const DOM = {
    body: document.body,
    preloader: document.getElementById("preloader"),
    mainContent: document.getElementById("main-content"),
    mainHeader: document.getElementById("main-header"),
    navMenu: document.getElementById("nav-menu"),
    navLinks: document.querySelectorAll(".nav-link"),
    mobileToggle: document.getElementById("nav-mobile-toggle"),
    mobileDrawer: document.getElementById("mobile-nav-drawer"),
    mobileOverlay: document.getElementById("mobile-nav-overlay"),
    mobileClose: document.getElementById("mobile-nav-close"),
    mobileLinks: document.querySelectorAll(".mobile-nav-item a"),
    searchBtn: document.getElementById("nav-search-btn"),
    searchOverlay: document.getElementById("search-overlay"),
    searchClose: document.getElementById("search-overlay-close"),
    searchInput: document.getElementById("search-input"),
    searchResults: document.getElementById("search-overlay-results"),
    cartBtn: document.getElementById("nav-cart-btn"),
    cartOverlay: document.getElementById("cart-overlay"),
    cartSidebar: document.getElementById("cart-sidebar"),
    cartClose: document.getElementById("cart-sidebar-close"),
    cartBody: document.getElementById("cart-sidebar-body"),
    cartEmpty: document.getElementById("cart-empty"),
    cartItems: document.getElementById("cart-items"),
    cartFooter: document.getElementById("cart-sidebar-footer"),
    cartCount: document.getElementById("nav-cart-count"),
    cartTotalItems: document.getElementById("cart-total-items"),
    cartTotalCategories: document.getElementById("cart-total-categories"),
    cartWhatsappBtn: document.getElementById("cart-whatsapp-btn"),
    cartClearBtn: document.getElementById("cart-clear-btn"),
    quickviewOverlay: document.getElementById("quickview-overlay"),
    quickviewModal: document.getElementById("quickview-modal"),
    quickviewClose: document.getElementById("quickview-close"),
    quickviewImage: document.getElementById("quickview-image"),
    quickviewCategory: document.getElementById("quickview-category"),
    quickviewTitle: document.getElementById("quickview-title"),
    quickviewDescription: document.getElementById("quickview-description"),
    quickviewSpecs: document.getElementById("quickview-specs"),
    qtyInput: document.getElementById("qty-input"),
    qtyMinus: document.getElementById("qty-minus"),
    qtyPlus: document.getElementById("qty-plus"),
    qvAddCart: document.getElementById("qv-add-cart-btn"),
    qvBuyNow: document.getElementById("qv-buy-now-btn"),
    backToTop: document.getElementById("back-to-top"),
    toast: document.getElementById("toast-notification"),
    toastMsg: document.getElementById("toast-message"),
    productsGrid: document.getElementById("products-grid"),
    featuredGrid: document.getElementById("featured-products-grid"),
    blogGrid: document.getElementById("blog-grid"),
    galleryGrid: document.getElementById("gallery-grid"),
    enquiryForm: document.getElementById("enquiry-form"),
    pages: document.querySelectorAll(".page"),
  };

  // ============================================
  // 5. UTILITY FUNCTIONS
  // ============================================
  function showToast(message) {
    DOM.toastMsg.textContent = message;
    DOM.toast.classList.add("show");
    setTimeout(() => DOM.toast.classList.remove("show"), 3000);
  }

  function formatCategoryName(cat) {
    return cat.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  }

  function openURL(url) {
    window.open(url, "_blank");
  }

  // ============================================
  // 6. SPA ROUTER
  // ============================================
  function router() {
    let hash = window.location.hash || "#home";
    // Handle query params like #products?category=herbal-juices
    let [path, queryString] = hash.split("?");
    let pageName = path.replace("#", "");

    // Match page element
    let targetPage = document.getElementById(`page-${pageName}`);

    if (!targetPage) {
      // Fallback to home if page not found
      targetPage = document.getElementById("page-home");
      pageName = "home";
    }

    // Hide all pages, show target
    DOM.pages.forEach((p) => p.classList.remove("active"));
    targetPage.classList.add("active");

    // Update Nav Active State
    document
      .querySelectorAll(".nav-item")
      .forEach((item) => item.classList.remove("active"));
    document
      .querySelectorAll(".mobile-nav-item")
      .forEach((item) => item.classList.remove("active"));

    let activeNavItem = document.querySelector(
      `.nav-link[data-page="${pageName}"]`,
    );
    if (activeNavItem)
      activeNavItem.closest(".nav-item").classList.add("active");

    let activeMobileItem = document.querySelector(
      `.mobile-nav-item a[data-page="${pageName}"]`,
    );
    if (activeMobileItem)
      activeMobileItem.closest(".mobile-nav-item").classList.add("active");

    // Close mobile menu if open
    closeMobileMenu();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });

    // Page specific init
    if (pageName === "products") {
      initProductsPage(queryString);
    } else if (pageName === "blog") {
      initBlogPage();
    } else if (pageName === "home") {
      initHomePage();
    }
  }

  // ============================================
  // 7. HEADER & NAVIGATION LOGIC
  // ============================================
  function initHeader() {
    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        DOM.mainHeader.classList.add("scrolled");
      } else {
        DOM.mainHeader.classList.remove("scrolled");
      }
      lastScroll = currentScroll;

      // Back to top button
      if (currentScroll > 500) {
        DOM.backToTop.classList.add("visible");
      } else {
        DOM.backToTop.classList.remove("visible");
      }
    });

    DOM.backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mobile Menu
    DOM.mobileToggle.addEventListener("click", toggleMobileMenu);
    DOM.mobileClose.addEventListener("click", closeMobileMenu);
    DOM.mobileOverlay.addEventListener("click", closeMobileMenu);

    // Mobile Submenu Toggles
    document
      .querySelectorAll(".mobile-nav-item.has-submenu > a")
      .forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          let parent = link.closest(".mobile-nav-item");
          parent.classList.toggle("open");
        });
      });

    // Search Overlay
    DOM.searchBtn.addEventListener("click", () => {
      DOM.searchOverlay.classList.add("active");
      DOM.body.classList.add("no-scroll");
      setTimeout(() => DOM.searchInput.focus(), 300);
    });
    DOM.searchClose.addEventListener("click", closeSearchOverlay);
    DOM.searchOverlay.addEventListener("click", (e) => {
      if (e.target === DOM.searchOverlay) closeSearchOverlay();
    });
    DOM.searchInput.addEventListener("input", handleSearch);
  }

  function toggleMobileMenu() {
    DOM.mobileDrawer.classList.add("active");
    DOM.mobileOverlay.classList.add("active");
    DOM.body.classList.add("no-scroll");
    DOM.mobileToggle.classList.add("active");
  }

  function closeMobileMenu() {
    DOM.mobileDrawer.classList.remove("active");
    DOM.mobileOverlay.classList.remove("active");
    DOM.body.classList.remove("no-scroll");
    DOM.mobileToggle.classList.remove("active");
  }

  function closeSearchOverlay() {
    DOM.searchOverlay.classList.remove("active");
    DOM.body.classList.remove("no-scroll");
    DOM.searchInput.value = "";
    DOM.searchResults.innerHTML = "";
  }

  function handleSearch(e) {
    const term = e.target.value.toLowerCase();
    DOM.searchResults.innerHTML = "";
    if (term.length < 2) return;

    const results = App.products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term),
    );

    if (results.length === 0) {
      DOM.searchResults.innerHTML =
        '<p style="padding:1rem;color:#666;">No products found.</p>';
      return;
    }

    results.forEach((p) => {
      DOM.searchResults.innerHTML += `
                <a href="#products?category=${p.category}" class="search-result-item" onclick="document.getElementById('search-overlay-close').click()">
                    <img src="${p.image}" alt="${p.name}">
                    <div class="search-result-info">
                        <h4>${p.name}</h4>
                        <span>${formatCategoryName(p.category)}</span>
                    </div>
                </a>
            `;
    });
  }

  // ============================================
  // 8. PRODUCT RENDERING & FILTERING
  // ============================================
  function renderProductCard(product, isFeatured = false) {
    return `
            <div class="product-card" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
                <div class="product-card-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <span class="product-card-category">${formatCategoryName(product.category)}</span>
                    <div class="product-card-actions">
                        <button class="product-card-action-btn" title="Quick View" onclick="window.AnantApp.openQuickView('${product.id}')">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="product-card-action-btn" title="Add to Cart" onclick="window.AnantApp.addToCart('${product.id}')">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-card-body">
                    <h3 class="product-card-title">${product.name}</h3>
                    <p class="product-card-desc">${product.shortDesc}</p>
                    <div class="product-card-footer">
                        <button class="btn btn-sm btn-primary" onclick="window.AnantApp.addToCart('${product.id}')">
                            <i class="fas fa-cart-plus"></i> Add
                        </button>
                        <button class="btn btn-sm btn-whatsapp" onclick="window.AnantApp.buyNow('${product.id}')">
                            <i class="fab fa-whatsapp"></i> Buy
                        </button>
                    </div>
                </div>
            </div>
        `;
  }

  function initHomePage() {
    // Render Featured Products (take first 8)
    if (DOM.featuredGrid) {
      DOM.featuredGrid.innerHTML = "";
      const featured = App.products.slice(0, 8);
      featured.forEach(
        (p) => (DOM.featuredGrid.innerHTML += renderProductCard(p, true)),
      );
    }
    initCounters();
  }

  function initProductsPage(queryString) {
    let activeCategory = "all";
    if (queryString) {
      const params = new URLSearchParams(queryString);
      activeCategory = params.get("category") || "all";
    }

    // Set active filter button
    document.querySelectorAll(".filter-cat-btn").forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.filter === activeCategory) btn.classList.add("active");
    });

    renderFilteredProducts();

    // Init filter buttons if not already done
    if (!DOM.productsGrid.dataset.initialized) {
      document.querySelectorAll(".filter-cat-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          document
            .querySelectorAll(".filter-cat-btn")
            .forEach((b) => b.classList.remove("active"));
          e.currentTarget.classList.add("active");
          renderFilteredProducts();
        });
      });

      document
        .getElementById("product-search")
        .addEventListener("input", renderFilteredProducts);
      document
        .getElementById("product-sort")
        .addEventListener("change", renderFilteredProducts);

      // View toggles
      document.querySelectorAll(".view-toggle-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          document
            .querySelectorAll(".view-toggle-btn")
            .forEach((b) => b.classList.remove("active"));
          e.currentTarget.classList.add("active");
          if (e.currentTarget.dataset.view === "list") {
            DOM.productsGrid.classList.add("list-view");
          } else {
            DOM.productsGrid.classList.remove("list-view");
          }
        });
      });

      DOM.productsGrid.dataset.initialized = "true";
    }
  }

  function renderFilteredProducts() {
    const activeCategory =
      document.querySelector(".filter-cat-btn.active")?.dataset.filter || "all";
    const searchTerm =
      document.getElementById("product-search")?.value.toLowerCase() || "";
    const sortBy = document.getElementById("product-sort")?.value || "default";

    let filtered = App.products.filter((p) => {
      const matchCategory =
        activeCategory === "all" || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm) ||
        p.shortDesc.toLowerCase().includes(searchTerm);
      return matchCategory && matchSearch;
    });

    if (sortBy === "name-asc")
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "name-desc")
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === "category")
      filtered.sort((a, b) => a.category.localeCompare(b.category));

    DOM.productsGrid.innerHTML = "";
    const countEl = document.getElementById("products-count");
    const noProducts = document.getElementById("no-products-found");

    if (filtered.length === 0) {
      if (noProducts) noProducts.style.display = "block";
      if (countEl) countEl.textContent = "Showing 0 products";
    } else {
      if (noProducts) noProducts.style.display = "none";
      if (countEl) countEl.textContent = `Showing ${filtered.length} products`;
      filtered.forEach(
        (p) => (DOM.productsGrid.innerHTML += renderProductCard(p)),
      );
    }
  }

  // ============================================
  // 9. QUICK VIEW MODAL
  // ============================================
  function openQuickView(productId) {
    const product = App.products.find((p) => p.id === productId);
    if (!product) return;

    App.currentQuickViewProduct = product;

    DOM.quickviewImage.src = product.image;
    DOM.quickviewImage.alt = product.name;
    DOM.quickviewCategory.textContent = formatCategoryName(product.category);
    DOM.quickviewTitle.textContent = product.name;
    DOM.quickviewDescription.textContent = product.longDesc;

    DOM.quickviewSpecs.innerHTML = `
            <div class="spec-item"><i class="fas fa-box"></i> <span>MOQ: ${product.moq} Units</span></div>
            <div class="spec-item"><i class="fas fa-ruler"></i> <span>Sizes: ${product.sizes}</span></div>
            <div class="spec-item"><i class="fas fa-leaf"></i> <span>${product.ingredients}</span></div>
            <div class="spec-item"><i class="fas fa-tags"></i> <span>Private Label Available</span></div>
        `;

    DOM.qtyInput.value = product.moq;

    DOM.quickviewModal.classList.add("active");
    DOM.quickviewOverlay.classList.add("active");
    DOM.body.classList.add("no-scroll");
  }

  function closeQuickView() {
    DOM.quickviewModal.classList.remove("active");
    DOM.quickviewOverlay.classList.remove("active");
    DOM.body.classList.remove("no-scroll");
    App.currentQuickViewProduct = null;
  }

  function initQuickView() {
    DOM.quickviewClose.addEventListener("click", closeQuickView);
    DOM.quickviewOverlay.addEventListener("click", closeQuickView);

    DOM.qtyMinus.addEventListener("click", () => {
      let val = parseInt(DOM.qtyInput.value);
      let moq = App.currentQuickViewProduct
        ? App.currentQuickViewProduct.moq
        : 1;
      if (val > moq) DOM.qtyInput.value = val - 1;
    });
    DOM.qtyPlus.addEventListener("click", () => {
      let val = parseInt(DOM.qtyInput.value);
      DOM.qtyInput.value = val + 1;
    });

    DOM.qvAddCart.addEventListener("click", () => {
      if (!App.currentQuickViewProduct) return;
      const qty = parseInt(DOM.qtyInput.value);
      addItemToCart(App.currentQuickViewProduct, qty);
      closeQuickView();
    });

    DOM.qvBuyNow.addEventListener("click", () => {
      if (!App.currentQuickViewProduct) return;
      const qty = parseInt(DOM.qtyInput.value);
      const p = App.currentQuickViewProduct;
      const msg = `Hi Anant Industries, I am interested in buying:\n\n*${p.name}* (${formatCategoryName(p.category)})\nQuantity: ${qty} Units\n\nPlease share pricing and details.`;
      openURL(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      );
      closeQuickView();
    });
  }

  // ============================================
  // 10. CART LOGIC
  // ============================================
  function loadCart() {
    const savedCart = localStorage.getItem("anantCart");
    if (savedCart) {
      App.cart = JSON.parse(savedCart);
    }
    updateCartUI();
  }

  function saveCart() {
    localStorage.setItem("anantCart", JSON.stringify(App.cart));
  }

  function addItemToCart(product, qty) {
    const existingItem = App.cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.qty += qty;
    } else {
      App.cart.push({
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.image,
        qty: qty,
        moq: product.moq,
      });
    }
    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`);

    // Bump animation
    DOM.cartCount.classList.add("bump");
    setTimeout(() => DOM.cartCount.classList.remove("bump"), 400);
  }

  function removeFromCart(productId) {
    App.cart = App.cart.filter((item) => item.id !== productId);
    saveCart();
    updateCartUI();
  }

  function updateCartQty(productId, newQty) {
    const item = App.cart.find((i) => i.id === productId);
    if (item) {
      if (newQty < item.moq) {
        removeFromCart(productId);
      } else {
        item.qty = newQty;
        saveCart();
        updateCartUI();
      }
    }
  }

  function clearCart() {
    App.cart = [];
    saveCart();
    updateCartUI();
    showToast("Cart cleared.");
  }

  function updateCartUI() {
    const totalItems = App.cart.reduce((sum, item) => sum + item.qty, 0);
    const categories = new Set(App.cart.map((item) => item.category)).size;

    DOM.cartCount.textContent = App.cart.length;

    if (App.cart.length === 0) {
      DOM.cartEmpty.style.display = "block";
      DOM.cartItems.innerHTML = "";
      DOM.cartFooter.style.display = "none";
    } else {
      DOM.cartEmpty.style.display = "none";
      DOM.cartFooter.style.display = "block";
      DOM.cartTotalItems.textContent = totalItems;
      DOM.cartTotalCategories.textContent = categories;

      DOM.cartItems.innerHTML = "";
      App.cart.forEach((item) => {
        DOM.cartItems.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <div class="cart-item-info">
                            <h4 class="cart-item-name">${item.name}</h4>
                            <span class="cart-item-cat">${formatCategoryName(item.category)}</span>
                            <div class="cart-item-qty">
                                <button onclick="window.AnantApp.updateCartQty('${item.id}', ${item.qty - 1})">-</button>
                                <span>${item.qty}</span>
                                <button onclick="window.AnantApp.updateCartQty('${item.id}', ${item.qty + 1})">+</button>
                            </div>
                        </div>
                        <button class="cart-item-remove" onclick="window.AnantApp.removeFromCart('${item.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
      });

      // Update WhatsApp Cart Link
      let cartMsg = `Hi Anant Industries, I would like to inquire about the following products:\n\n`;
      App.cart.forEach((item) => {
        cartMsg += `▪️ *${item.name}* (${formatCategoryName(item.category)}) - Qty: *${item.qty}*\n`;
      });
      cartMsg += `\nPlease share the best pricing and availability. Thank you!`;
      DOM.cartWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cartMsg)}`;
    }
  }

  function initCart() {
    DOM.cartBtn.addEventListener("click", () => {
      DOM.cartSidebar.classList.add("active");
      DOM.cartOverlay.classList.add("active");
      DOM.body.classList.add("no-scroll");
    });
    DOM.cartClose.addEventListener("click", closeCart);
    DOM.cartOverlay.addEventListener("click", closeCart);
    DOM.cartClearBtn.addEventListener("click", clearCart);
    loadCart();
  }

  function closeCart() {
    DOM.cartSidebar.classList.remove("active");
    DOM.cartOverlay.classList.remove("active");
    DOM.body.classList.remove("no-scroll");
  }

  // ============================================
  // 11. BLOG LOGIC
  // ============================================
  function renderBlogCard(blog) {
    return `
            <div class="blog-card" data-category="${blog.category}">
                <div class="blog-card-image">
                    <img src="${blog.image}" alt="${blog.title}" loading="lazy">
                </div>
                <div class="blog-card-body">
                    <div class="blog-card-meta">
                        <span><i class="fas fa-folder"></i> ${formatCategoryName(blog.category)}</span>
                        <span><i class="fas fa-calendar"></i> ${blog.date}</span>
                    </div>
                    <h3 class="blog-card-title"><a href="#blog-post?id=${blog.id}" onclick="window.AnantApp.loadBlogPost('${blog.id}')">${blog.title}</a></h3>
                    <p class="blog-card-excerpt">${blog.excerpt}</p>
                    <a href="#blog-post?id=${blog.id}" class="btn btn-sm btn-outline" onclick="window.AnantApp.loadBlogPost('${blog.id}')">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
  }

  function initBlogPage() {
    if (DOM.blogGrid) {
      DOM.blogGrid.innerHTML = "";
      App.blogs.forEach((b) => (DOM.blogGrid.innerHTML += renderBlogCard(b)));
    }

    // Blog category filters
    document.querySelectorAll(".blog-cat-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document
          .querySelectorAll(".blog-cat-btn")
          .forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        const cat = e.currentTarget.dataset.blogCat;

        document.querySelectorAll(".blog-card").forEach((card) => {
          if (cat === "all" || card.dataset.category === cat) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  function loadBlogPost(blogId) {
    const blog = App.blogs.find((b) => b.id === blogId);
    if (!blog) return;

    const articleEl = document.getElementById("blog-article-content");
    const breadcrumbEl = document.getElementById("blog-post-breadcrumb");

    breadcrumbEl.textContent = blog.title;
    articleEl.innerHTML = `
            <div class="blog-card-image" style="margin-bottom: 2rem; border-radius: 1rem; overflow:hidden;">
                <img src="${blog.image}" alt="${blog.title}">
            </div>
            <div class="blog-card-meta" style="margin-bottom: 1rem;">
                <span><i class="fas fa-folder"></i> ${formatCategoryName(blog.category)}</span>
                <span><i class="fas fa-calendar"></i> ${blog.date}</span>
            </div>
            <h1 style="font-size: 2.5rem; margin-bottom: 2rem; line-height: 1.2;">${blog.title}</h1>
            ${blog.content}
        `;

    // Navigate to blog post page
    DOM.pages.forEach((p) => p.classList.remove("active"));
    document.getElementById("page-blog-post").classList.add("active");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  // ============================================
  // 12. ENQUIRY FORM TO WHATSAPP
  // ============================================
  function initEnquiryForm() {
    if (!DOM.enquiryForm) return;
    DOM.enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(DOM.enquiryForm);
      const name = formData.get("name");
      const company = formData.get("company") || "N/A";
      const phone = formData.get("phone");
      const email = formData.get("email");
      const service = formData.get("service");
      const category = formData.get("category") || "Any";
      const quantity = formData.get("quantity") || "To be discussed";
      const budget = formData.get("budget") || "To be discussed";
      const message = formData.get("message");

      const whatsappMessage = `
*New Enquiry from Anant Industries Website* 🌿

*Name:* ${name}
*Company:* ${company}
*Phone:* ${phone}
*Email:* ${email}

*Service Required:* ${service}
*Product Category:* ${category}
*Estimated Quantity:* ${quantity}
*Budget:* ${budget}

*Message:*
 ${message}

_Please reach out to discuss further._
            `.trim();

      openURL(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
      );
      showToast("Redirecting to WhatsApp...");
    });
  }

  // ============================================
  // 13. FAQ & GALLERY & TESTIMONIALS
  // ============================================
  function initAccordions() {
    document.querySelectorAll(".faq-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isOpen = item.classList.contains("open");

        // Close all in same group
        const group = item.closest(".faq-group");
        if (group)
          group
            .querySelectorAll(".faq-item")
            .forEach((i) => i.classList.remove("open"));

        if (!isOpen) item.classList.add("open");

        // Toggle plus icon
        const icon = btn.querySelector("i");
        if (item.classList.contains("open")) {
          icon.classList.remove("fa-plus");
          icon.classList.add("fa-minus");
        } else {
          icon.classList.remove("fa-minus");
          icon.classList.add("fa-plus");
        }
      });
    });
  }

  function initGallery() {
    document.querySelectorAll(".gallery-filter-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document
          .querySelectorAll(".gallery-filter-btn")
          .forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        const filter = e.currentTarget.dataset.galleryFilter;

        document.querySelectorAll(".gallery-item").forEach((item) => {
          if (filter === "all" || item.dataset.category === filter) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  function initTestimonials() {
    const slider = document.getElementById("testimonials-slider");
    const prevBtn = document.getElementById("test-prev");
    const nextBtn = document.getElementById("test-next");

    if (!slider) return;

    let scrollAmount = 0;
    const cardWidth =
      slider.querySelector(".testimonial-card").offsetWidth + 24; // width + gap

    nextBtn?.addEventListener("click", () => {
      scrollAmount += cardWidth;
      if (scrollAmount > slider.scrollWidth - slider.clientWidth)
        scrollAmount = slider.scrollWidth - slider.clientWidth;
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn?.addEventListener("click", () => {
      scrollAmount -= cardWidth;
      if (scrollAmount < 0) scrollAmount = 0;
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    });
  }

  function initCounters() {
    const counters = document.querySelectorAll(".hero-stat-number");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-count");
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };

      // Simple intersection observer to trigger once
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
          observer.disconnect();
        }
      });
      observer.observe(counter);
    });
  }

  // ============================================
  // 14. INITIALIZATION
  // ============================================
  function init() {
    // Remove Preloader
    setTimeout(() => {
      DOM.preloader.classList.add("loaded");
      setTimeout(() => (DOM.preloader.style.display = "none"), 500);
    }, 1500);

    // Initialize Components
    initHeader();
    initQuickView();
    initCart();
    initAccordions();
    initGallery();
    initTestimonials();
    initEnquiryForm();

    // Handle SPA Routing
    window.addEventListener("hashchange", router);
    router(); // Initial route

    // Expose necessary functions to global scope for inline onclick
    window.AnantApp = {
      openQuickView: openQuickView,
      addToCart: (productId) => {
        const product = App.products.find((p) => p.id === productId);
        if (product) addItemToCart(product, product.moq);
      },
      buyNow: (productId) => {
        const product = App.products.find((p) => p.id === productId);
        if (product) {
          const msg = `Hi Anant Industries, I am interested in buying:\n\n*${product.name}* (${formatCategoryName(product.category)})\nQuantity: ${product.moq} Units (MOQ)\n\nPlease share pricing and details.`;
          openURL(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
          );
        }
      },
      removeFromCart: removeFromCart,
      updateCartQty: updateCartQty,
      loadBlogPost: loadBlogPost,
    };
  }

  // Run on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
