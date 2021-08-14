var config = {
    style: 'mapbox://styles/ctrnslv/ckrt5wpw02h2x18mn0a2896hc',
    accessToken: 'pk.eyJ1IjoiY3RybnNsdiIsImEiOiJja3Jpd2tkeHgzN3pyMnVwOGpjcHJ1ODhoIn0.JucVmRdpKDMRmSbHVA9wtg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'SENTINELLE',
    subtitle: 'In viaggio tra le tappe dell\'inchiesta',
  //  byline: ,
    footer: 'Premio Morrione 2021',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            //title: 'jnj',
            description: '<audio controls> <source src="Video apertura inchiesta con song.mp3" type="audio/mpeg"></audio><br>Scorri la mappa per incontrare i luoghi e le persone dell\'inchiesta.',
            location: {
                center: [15.88998, 40.62668],
                zoom:8.5,
                pitch:0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
                {
                      id: 'seventh-style-id',
                      alignment: 'right',
                      hidden: false,
                      title: 'Pisticci - Movimento Tutela Val Basento',
                      image: 'https://inchiestasentinelle.webnode.it/_files/200000077-2bd632bd65/sentinella3-4.jpg',
                      video: 'https://youtu.be/JxxuBJ2epl0',
                      description: 'Trovo Nico, insegnante di scuola e sentinella, che mi racconta delle battaglie del Movimento Tutela Val Basento per l\’ambiente lucano.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/JxxuBJ2epl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br><p><a href="https://drive.google.com/drive/folders/1PBxVD-gW8TZVg92sXGhUyjNDGkCMh-fF">Visita le risorse online</a></p><br><p><a href="http://movimentovalbasento.altervista.org/">Visita la pagina del Movimento</a></p>',

                      location: {
                          center: [16.55850, 40.39065],
                          zoom: 14.5,
                          pitch:45,
                          bearing: 0
                      },
                      mapAnimation: 'flyTo',
                      rotateAnimation: false,
                      callback: '',
                      onChapterEnter: [],
                      onChapterExit: []
                    },
                    {
                          id: 'eighth-style-id',
                          alignment: 'left',
                          hidden: false,
                          title: 'Pisticci - Studio legale',
                          image: 'https://inchiestasentinelle.webnode.it/_files/200000076-8cd838cd85/sentinella4-3.jpg',
                          description: 'Intervisto l\'Avvocato Di Pisa, che difende le parti civili nel processo Petrolgate.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/rstAMN2-l5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p><a href="https://drive.google.com/drive/folders/1hBI-gmM4Up0r24OIa5GQ0jtuJUKfqHfS?usp=sharing">Accedi al materiale legale sul processo</a></p>',
                          location: {
                              center: [16.55850, 40.39065],
                              zoom: 14.5,
                              pitch: 45,
                              bearing: 0
                          },
                          mapAnimation: 'flyTo',
                          rotateAnimation: false,
                          callback: '',
                          onChapterEnter: [],
                          onChapterExit: []
                        },
                        {
                              id: 'aa-style-id',
                              alignment: 'right',
                              hidden: false,
                              title: 'Pisticci - Chiesa',
                              //image: ,
                              description: 'Mi presento alla comunità di Pisticci nella loro Chiesa e ascolto le loro voci e denunce.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/kTwIGHfi5po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                              location: {
                                  center: [16.55850, 40.39065],
                                  zoom: 14.5,
                                  pitch: 45,
                                  bearing: 0
                              },
                              mapAnimation: 'flyTo',
                              rotateAnimation: false,
                              callback: '',
                              onChapterEnter: [],
                              onChapterExit: []
                            },
                            {
                                  id: 'bb-style-id',
                                  alignment: 'left',
                                  hidden: false,
                                  title: 'Viggiano - Direttivo Eni Distretto Meridionale',
                              //image: ,
                                  description: 'Intervisto l\'Ingegnere Lopomo, Responsabile del Distretto Meridionale Eni, insieme al responsabile HSE del sito.<br><br><<iframe width="350" height="250" src="https://www.youtube.com/embed/6A4dLjX6LuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                  location: {
                                      center: [15.89994, 40.33656],
                                      zoom: 14,
                                      pitch: 45,
                                      bearing: 0
                                  },
                                  mapAnimation: 'flyTo',
                                  rotateAnimation: false,
                                  callback: '',
                                  onChapterEnter: [],
                                  onChapterExit: []
                                },
                                {
                                      id: 'boh-style-id',
                                      alignment: 'right',
                                      hidden: false,
                                      title: 'Viggiano - Piazza',
                                      //image: ,
                                      description: 'Mimmo racconta dei contrasti di Viggiano, terra dell\'arpa e della Madonna Nera, un\'oasi nel deserto arricchita dalle royalties.<br><br> <iframe width="350" height="250" src="https://www.youtube.com/embed/Lu0vzPX-Rts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                      location: {
                                          center: [15.90305, 40.34099],
                                          zoom: 14,
                                          pitch: 45,
                                          bearing: 0
                                      },
                                      mapAnimation: 'flyTo',
                                      rotateAnimation: false,
                                      callback: '',
                                      onChapterEnter: [],
                                      onChapterExit: []
                                    },
                                    {
                                          id: 'dd-style-id',
                                          alignment: 'left',
                                          hidden: false,
                                          title: 'Viggiano - Studio medico',
                                          image: 'https://inchiestasentinelle.webnode.it/_files/200000088-432ac432af/sentinella15-5.jpg',
                                          description:'Un dottore sentinella, il Dottor Mele, ci racconta del perchè \"in Basilicata di petrolio si muore…\"<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/W4_B4HOFr8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br><p><a href="https://drive.google.com/drive/folders/1VaSDuX64mTLNk-JLstfpP1KbWatKdfmH?usp=sharing">Accedi agli studi sull\'impatto sanitario del petrolio</a></p>',
                                          location: {
                                              center: [15.90501,40.33897],
                                              zoom: 14,
                                              pitch: 45,
                                              bearing: 0
                                          },
                                          mapAnimation: 'flyTo',
                                          rotateAnimation: false,
                                          callback: '',
                                          onChapterEnter: [],
                                          onChapterExit: []
                                        },
                                        {
                                              id: 'ee-style-id',
                                              alignment: 'right',
                                              hidden: false,
                                              title: 'Viggiano - Santuario della Madonna Nera',
                                              //image: ,
                                              description: 'La storia del petrolio in Basilicata raccontata in un monologo.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/NZlKtrI003g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                              location: {
                                                  center: [15.86218, 40.37978],
                                                  zoom: 14,
                                                  pitch: 45,
                                                  bearing: 0
                                              },
                                              mapAnimation: 'flyTo',
                                              rotateAnimation: false,
                                              callback: '',
                                              onChapterEnter: [],
                                              onChapterExit: []
                                            },
                                            {
                                                  id: 'ff-style-id',
                                                  alignment: 'left',
                                                  hidden: false,
                                                  title: 'Viggiano - Centro Oli',
                                                  //image: ,
                                                  description: 'Percorriamo il perimetro del Centro Oli, dove mura colorate stridono con la realtà estrattiva racchiusa all\'interno.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/HsSyVOTEiQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br><p><a href="https://www.eni.com/eni-basilicata/chi-siamo/centro-olio-val-d-agri.page">Visita la pagina del Centro Oli</a></p>',
                                                  location: {
                                                      center: [15.89166, 40.31453],
                                                      zoom: 13,
                                                      pitch: 45,
                                                      bearing: 0
                                                  },
                                                  mapAnimation: 'flyTo',
                                                  rotateAnimation: false,
                                                  callback: '',
                                                  onChapterEnter: [],
                                                  onChapterExit: []
                                                },
                                                {
                                                      id: 'ancora-style-id',
                                                      alignment: 'right',
                                                      hidden: false,
                                                      title: 'Lago del Pertusillo',
                                                      //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                                                      description: 'Seguo Mimmo sulle sponde del lago del Pertusillo e ascolto il suo racconto sulle morie di pesci.<br><br> <iframe width="350" height="250" src="https://www.youtube.com/embed/Lu0vzPX-Rts?start=551" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                                      location: {
                                                          center: [15.980585, 40.279434],
                                                          zoom: 12.5,
                                                          pitch: 45,
                                                          bearing: 0
                                                      },
                                                      mapAnimation: 'flyTo',
                                                      rotateAnimation: false,
                                                      callback: '',
                                                      onChapterEnter: [],
                                                      onChapterExit: []
                                                    },
                                                    {
                                                          id: 'hh-style-id',
                                                          alignment: 'left',
                                                          hidden: false,
                                                          title: 'Grumento Nova - Località Campestrini',
                                                          image: 'https://inchiestasentinelle.webnode.it/_files/200000074-5493c5493e/sentinella9-3.jpg',
                                                          description: 'Intervisto l\'allevatore Signor Miranda e sua madre, che mi raccontano delle conseguenze del petrolio sui loro animali.<br><<br> <iframe width="350" height="250" src="https://www.youtube.com/embed/rNs63kJrX6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                                          location: {
                                                              center: [15.889972,40.308029],
                                                              zoom: 13,
                                                              pitch: 45,
                                                              bearing: 0
                                                          },
                                                          mapAnimation: 'flyTo',
                                                          rotateAnimation: false,
                                                          callback: '',
                                                          onChapterEnter: [],
                                                          onChapterExit: []
                                                        },
                                                        {
                                                              id: 'ii-style-id',
                                                              alignment: 'right',
                                                              hidden: false,
                                                              title: 'Policoro - Studio legale',
                                                              image: 'https://inchiestasentinelle.webnode.it/_files/200000085-a7919a791c/sentinella12-0.jpg',
                                                              image1:'https://inchiestasentinelle.webnode.it/_files/200000079-6694566947/sentinella6-7.jpg',
                                                              description: 'Intervisto l\'Avvocato Bellizzi e il Dottor Farina, due professionisti sentinella che guidano i cittadini nel dimostrare gli impatti del petrolio.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/xYiY8lFXHiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                                              location: {
                                                                  center: [16.69560, 40.20562],
                                                                  zoom: 13,
                                                                  pitch: 45,
                                                                  bearing: 0
                                                              },
                                                              mapAnimation: 'flyTo',
                                                              rotateAnimation: false,
                                                              callback: '',
                                                              onChapterEnter: [],
                                                              onChapterExit: []
                                                            },
                                                            {
                                                                  id: 'll-style-id',
                                                                  alignment: 'left',
                                                                  hidden: false,
                                                                  title: 'Pisticci Scalo - Tecnoparco',
                                                                  //image: ,
                                                                  description: 'Visito con Mimmo il Tecnoparco di Pisticci Scalo, fonte di tormento per gli abitanti della zona.<p><a href="https://drive.google.com/drive/folders/1kSpIWE8o_vRa-6D-DOVTN6a5ZdOgfDKQ?usp=sharing ">Vai a risorse e grafici </a></p>',
                                                                  location: {
                                                                      center: [16.548939,40.420474],
                                                                      zoom: 13,
                                                                      pitch: 45,
                                                                      bearing: 0
                                                                  },
                                                                  mapAnimation: 'flyTo',
                                                                  rotateAnimation: false,
                                                                  callback: '',
                                                                  onChapterEnter: [],
                                                                  onChapterExit: []
                                                                },
                                                                {
                                                                      id: 'mm-style-id',
                                                                      alignment: 'right',
                                                                      hidden: false,
                                                                      title: 'Pisticci Scalo - Chiesa',
                                                                      image: 'https://inchiestasentinelle.webnode.it/_files/200000075-ecfe4ecfe6/sentinella2-1.jpg',
                                                                      description: 'Mi accoglie un illuminato parroco sentinella che mi racconta dell\'impegno della sua comunità per l\'ambiente.<iframe width="350" height="250" src="https://www.youtube.com/embed/Fw168gfux0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                                                      location: {
                                                                          center: [16.548939,40.420474],
                                                                          zoom: 13,
                                                                          pitch: 45,
                                                                          bearing: 0
                                                                      },
                                                                      mapAnimation: 'flyTo',
                                                                      rotateAnimation: false,
                                                                      callback: '',
                                                                      onChapterEnter: [],
                                                                      onChapterExit: []
                                                                    },
                                                                    {
                                                                          id: 'nn-style-id',
                                                                          alignment: 'left',
                                                                          hidden: false,
                                                                          title: 'Corleto Perticara - Tempa Rossa',
                                                                          //image: ,
                                                                          description: 'Ci avviciniamo al sito estrattivo di Tempa Rossa.<r><br><br> <iframe width="350" height="250" src="https://www.youtube.com/embed/6F1mWhUrbMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br><p><a href="https://www.it.total.com/it/pagine/attivita/il-progetto-tempa-rossa ">Visita la pagina della Total - Tempa Rossa</a></p> ',
                                                                          location: {
                                                                              center: [16.085372,40.409225],
                                                                              zoom: 13.5,
                                                                              pitch: 45,
                                                                              bearing: 0
                                                                          },
                                                                          mapAnimation: 'flyTo',
                                                                          rotateAnimation: false,
                                                                          callback: '',
                                                                          onChapterEnter: [],
                                                                          onChapterExit: []
                                                                        },
                                                                        {
                                                                              id: 'oo-style-id',
                                                                              alignment: 'right',
                                                                              hidden: false,
                                                                              title: 'Corleto Perticara - Pascolo',
                                                                              //image:,
                                                                              description: 'Osservo Mimmo mentre rimuove uno strumento di monitoraggio del gas flaring attraverso il quale ha realizzato un time lapse per Cova Contro.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/jFcEa9Z-EHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br><p><a href="https://covacontro.org/# ">Visita la pagina di Cova Contro</a></p>',
                                                                              location: {
                                                                                  center: [16.085372,40.409225],
                                                                                  zoom: 13.5,
                                                                                  pitch:45,
                                                                                  bearing: 0
                                                                              },
                                                                              mapAnimation: 'flyTo',
                                                                              rotateAnimation: false,
                                                                              callback: '',
                                                                              onChapterEnter: [],
                                                                              onChapterExit: []
                                                                            },
                                                                                {
                                                                                      id: 'qq-style-id',
                                                                                      alignment: 'left',
                                                                                      hidden: false,
                                                                                      title: 'Pietrapertosa - Dolomiti lucane',
                                                                                      //image:' <img src="Dolomiti lucane.jpg">' ,
                                                                                      description: ' <img src="Dolomiti lucane.jpg"><br><br>Ammiro le affascinanti dolomiti lucane che quasi mi fanno dimenticare dei tanti pozzi a pochi chilometri di distanza.<br><br> <iframe width="350" height="250" src="https://www.youtube.com/embed/8Z1beGcgvL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                                                                      location: {
                                                                                          center: [16.059963,40.519963],
                                                                                          zoom: 13.5,
                                                                                          pitch: 45,
                                                                                          bearing: 0
                                                                                      },
                                                                                      mapAnimation: 'flyTo',
                                                                                      rotateAnimation: false,
                                                                                      callback: '',
                                                                                      onChapterEnter: [],
                                                                                      onChapterExit: []
                                                                                    },
                                                                                    {
                                                                                          id: 'rr-style-id',
                                                                                          alignment: 'right',
                                                                                          hidden: false,
                                                                                          title: 'Villa d\'Agri - Contrada Case Rosse',
                                                                                          //image: ,
                                                                                          description: 'Intervisto Camilla Nigro di Libera Val d\'Agri e dell\'Osservatorio Popolare Val d\'Agri che mi racconta delle sfide che affrontano le cittadine sentinella.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/VURvtiFq6IQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                                                                          location: {
                                                                                              center: [15.85137, 40.35111],
                                                                                              zoom: 13.5,
                                                                                              pitch: 0,
                                                                                              bearing: 0
                                                                                          },
                                                                                          mapAnimation: 'flyTo',
                                                                                          rotateAnimation: false,
                                                                                          callback: '',
                                                                                          onChapterEnter: [],
                                                                                          onChapterExit: []
                                                                                        },
                                                                                        {
                                                                                              id: 'ss-style-id',
                                                                                              alignment: 'left',
                                                                                              hidden: false,
                                                                                              title: 'Potenza - Tribunale',
                                                                                              //image: ,
                                                                                              description: 'Seguiamo la prima udienza del processo per disastro ambientale, scorporato dal più ampio processo Petrolgate deciso in primo grado a marzo 2021; incontriamo le istanze civiche che manifestano fuori dal tribunale.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/HLI7zGWSUCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                                                                              location: {
                                                                                                  center: [15.805873,40.633602],
                                                                                                  zoom: 13,
                                                                                                  pitch: 45,
                                                                                                  bearing: 0
                                                                                              },
                                                                                              mapAnimation: 'flyTo',
                                                                                              rotateAnimation: false,
                                                                                              callback: '',
                                                                                              onChapterEnter: [],
                                                                                              onChapterExit: []
                                                                                            },
                                                                                            {
                                                                                                  id: 'tt-style-id',
                                                                                                  alignment: 'right',
                                                                                                  hidden: false,
                                                                                                  title: 'Potenza - Università',
                                                                                                  image: 'https://inchiestasentinelle.webnode.it/_files/200000081-946ee946f0/sentinella7-6.jpg',
                                                                                                  description: 'Incontro Luca Manes che mi racconta del lavoro della ONG Recommon a tutela delle comunità che fronteggiano multinazionali.<br><br><p><a href="https://www.recommon.org/en/">Vai alla pagina di Recommon </a></p><br><p><a href="https://inganno.recommon.org/ ">Vai all\'inchiesta di Recommon sulla Basilicata </a></p>',
                                                                                                  location: {
                                                                                                      center: [15.805873,40.633602],
                                                                                                      zoom: 13,
                                                                                                      pitch: 45,
                                                                                                      bearing: 0
                                                                                                  },
                                                                                                  mapAnimation: 'flyTo',
                                                                                                  rotateAnimation: false,
                                                                                                  callback: '',
                                                                                                  onChapterEnter: [],
                                                                                                  onChapterExit: []
                                                                                                },
                                                                                                {
                                                                                                      id: 'uu-style-id',
                                                                                                      alignment: 'left',
                                                                                                      hidden: false,
                                                                                                      title: 'Potenza - ARPAB',
                                                                                                    //  image: ,
                                                                                                      description: 'Intervisto l\'Avvocato Tisci, Direttore dell\'Agenzia Regionale per la Protezione dell\'Ambiente Basilicata.<br><br> <iframe width="350" height="250" src="https://www.youtube.com/embed/DiViQZJFe9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br><p><a href="http://www.arpab.it/">Visita la pagina dell\'ARPAB</a></p> ',
                                                                                                      location: {
                                                                                                          center: [15.805873,40.633602],
                                                                                                          zoom: 13,
                                                                                                          pitch: 45,
                                                                                                          bearing: 0
                                                                                                      },
                                                                                                      mapAnimation: 'flyTo',
                                                                                                      rotateAnimation: false,
                                                                                                      callback: '',
                                                                                                      onChapterEnter: [],
                                                                                                      onChapterExit: []
                                                                                          },
                                                                                          {
                                                                                                id: 'vv-style-id',
                                                                                                alignment: 'right',
                                                                                                hidden: false,
                                                                                                title: 'Potenza - Redazione Basilicata24',
                                                                                              //  image: ,
                                                                                                description: 'Incontro i direttori della testata giornalistica d\’inchiesa Basilicata24 che mi raccontano dei rischi che corrono sia i giornalisti che denunciano che le loro fonti, i cittadini.<br><br><iframe width="350" height="250" src="https://www.youtube.com/embed/PBX0bcNh7sc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br><p><a href="https://www.basilicata24.it/ ">Visita la pagina di Basilicata24 </a></p>',
                                                                                                location: {
                                                                                                    center: [15.77840, 40.63997],
                                                                                                    zoom: 13,
                                                                                                    pitch: 45,
                                                                                                    bearing: 0
                                                                                                },
                                                                                                mapAnimation: 'flyTo',
                                                                                                rotateAnimation: false,
                                                                                                callback: '',
                                                                                                onChapterEnter: [],
                                                                                                onChapterExit: []
                                                                                    }
                                                                                        ]
                                                                                 };
