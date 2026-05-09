const movies = [

// ================= ACTION (30) =================
{ title:"John Wick",                    genre:"Action",  rating:8.5, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg" },
{ title:"Avengers Endgame",             genre:"Action",  rating:8.4, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
{ title:"Batman Begins",                genre:"Action",  rating:8.2, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg" },
{ title:"The Dark Knight",              genre:"Action",  rating:9.0, ott:"JioHotstar",     image:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
{ title:"Mad Max Fury Road",            genre:"Action",  rating:8.1, ott:"Apple TV",       image:"https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg" },
{ title:"Mission Impossible Fallout",   genre:"Action",  rating:8.0, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg" },
{ title:"Black Panther",                genre:"Action",  rating:7.9, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
{ title:"Gladiator",                    genre:"Action",  rating:8.5, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
{ title:"Top Gun Maverick",             genre:"Action",  rating:8.3, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" },
{ title:"Spider-Man No Way Home",       genre:"Action",  rating:8.2, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
{ title:"Thor Ragnarok",                genre:"Action",  rating:7.9, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" },
{ title:"Iron Man",                     genre:"Action",  rating:7.9, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBF8aLbXuv.jpg" },
{ title:"The Dark Knight Rises",        genre:"Action",  rating:8.4, ott:"JioHotstar",     image:"https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYQ17EOf01MD2hm.jpg" },
{ title:"John Wick Chapter 3",          genre:"Action",  rating:7.4, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpXUCo7F1MvS.jpg" },
{ title:"Captain America Civil War",    genre:"Action",  rating:7.8, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg" },
{ title:"Fast & Furious 7",             genre:"Action",  rating:7.1, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/xWq3HXzNxWQtEoISjFOuCiKHRAK.jpg" },
{ title:"Die Hard",                     genre:"Action",  rating:8.2, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg" },
{ title:"Terminator 2",                 genre:"Action",  rating:8.6, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi3JOGua1oDdX.jpg" },
{ title:"Kill Bill Vol 1",              genre:"Action",  rating:8.2, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg" },
{ title:"Lethal Weapon",                genre:"Action",  rating:7.6, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/fvRLaFDGBVFfbEQiryTKBwlbH7X.jpg" },
{ title:"The Raid",                     genre:"Action",  rating:7.6, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/9XeP7HkStVPCnOcPUqzQDGBBKhI.jpg" },
{ title:"Avengers Infinity War",        genre:"Action",  rating:8.4, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
{ title:"Extraction",                   genre:"Action",  rating:7.2, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/wlfDxbGFDz9gozni4BbTw5fhKNt.jpg" },
{ title:"Nobody",                       genre:"Action",  rating:7.4, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg" },
{ title:"The Equalizer",                genre:"Action",  rating:7.2, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/ky9Ro3hkYqBPBOXBFBfJTKhznKm.jpg" },
{ title:"Uncharted",                    genre:"Action",  rating:6.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/sqLowacltbZLoCa4KYye64RvvdQ.jpg" },
{ title:"300",                          genre:"Action",  rating:7.7, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/bUsXJrFKhFomSy4PfLgRMkHZRXR.jpg" },
{ title:"The Bourne Identity",          genre:"Action",  rating:7.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/8Uvmjm6aGHFSlynsFDmgumGJoE.jpg" },
{ title:"Edge of Tomorrow",             genre:"Action",  rating:7.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/xBfQbFRzT7uCjkWzPz2dBMiuNxA.jpg" },
{ title:"The Town",                     genre:"Action",  rating:7.5, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/9M2ztBuOXzzGnFrE4Y2OVK4F3V4.jpg" },

// ================= SCI-FI (30) =================
{ title:"Interstellar",                 genre:"Sci-Fi",  rating:8.7, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
{ title:"Inception",                    genre:"Sci-Fi",  rating:8.8, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
{ title:"Avatar",                       genre:"Sci-Fi",  rating:7.9, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
{ title:"Doctor Strange",               genre:"Sci-Fi",  rating:8.0, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },
{ title:"The Matrix",                   genre:"Sci-Fi",  rating:8.7, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
{ title:"Arrival",                      genre:"Sci-Fi",  rating:8.1, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg" },
{ title:"Blade Runner 2049",            genre:"Sci-Fi",  rating:8.0, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg" },
{ title:"Gravity",                      genre:"Sci-Fi",  rating:7.7, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg" },
{ title:"Dune",                         genre:"Sci-Fi",  rating:8.0, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/d5NXSklpcvDgmkehBVFiGfBhMnR.jpg" },
{ title:"Dune Part Two",                genre:"Sci-Fi",  rating:8.5, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg" },
{ title:"The Martian",                  genre:"Sci-Fi",  rating:8.0, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg" },
{ title:"Ex Machina",                   genre:"Sci-Fi",  rating:7.7, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg" },
{ title:"2001 A Space Odyssey",         genre:"Sci-Fi",  rating:8.3, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/ve72VxNqsuTAbDE7KEPosLdkGKr.jpg" },
{ title:"Her",                          genre:"Sci-Fi",  rating:8.0, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/sPjnTDYb5Q7IpfTzluBcmHQaRfz.jpg" },
{ title:"Looper",                       genre:"Sci-Fi",  rating:7.4, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/oXbTbqMzGIeVpLEXOWsOxeN3LOV.jpg" },
{ title:"Elysium",                      genre:"Sci-Fi",  rating:6.6, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/6aBHQOCeeXvCkfiDLPHxXiRZPJc.jpg" },
{ title:"Pacific Rim",                  genre:"Sci-Fi",  rating:7.0, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/hBNMFJr3bMvLMSIdxMQaHSZ8gY.jpg" },
{ title:"Oblivion",                     genre:"Sci-Fi",  rating:7.0, ott:"Apple TV",       image:"https://image.tmdb.org/t/p/w500/liW0mjvTyLs7UCumaHhx3PpU4VT.jpg" },
{ title:"Contact",                      genre:"Sci-Fi",  rating:7.5, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/nTjqyLPBwxPOBxFqHAqF9JDTawt.jpg" },
{ title:"Annihilation",                 genre:"Sci-Fi",  rating:7.5, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/esSqFtzoZCE5GqUZS9iHUcahGYe.jpg" },
{ title:"Minority Report",              genre:"Sci-Fi",  rating:7.7, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/m1oBk5c8RdKwFZp7Ao59diBe4A9.jpg" },
{ title:"Tenet",                        genre:"Sci-Fi",  rating:7.4, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijWhge.jpg" },
{ title:"Source Code",                  genre:"Sci-Fi",  rating:7.5, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/kaYTEySOi0ZMBpCcYaeFJfWmVz5.jpg" },
{ title:"Prometheus",                   genre:"Sci-Fi",  rating:7.0, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/bkQA7Llxs7QK2EHOA2bqJ0p3C5q.jpg" },
{ title:"Alien",                        genre:"Sci-Fi",  rating:8.5, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg" },
{ title:"Total Recall",                 genre:"Sci-Fi",  rating:7.5, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/r53fPFkFGfYJwFRMCDHNL2sPM5i.jpg" },
{ title:"I Am Legend",                  genre:"Sci-Fi",  rating:7.2, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/e1snRBPxHMkn7qNIyxwdSmEdBHj.jpg" },
{ title:"District 9",                   genre:"Sci-Fi",  rating:7.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/89DPVEP3GKxRfEoHCbOobOCMBHF.jpg" },
{ title:"Ready Player One",             genre:"Sci-Fi",  rating:7.4, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/pU1UecgfePDBLAA3OuKA4QsfNvP.jpg" },
{ title:"Alita Battle Angel",           genre:"Sci-Fi",  rating:7.3, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvWSILhs4kLEy.jpg" },

// ================= HORROR (30) =================
{ title:"IT",                           genre:"Horror",  rating:7.5, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },
{ title:"The Conjuring",                genre:"Horror",  rating:7.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },
{ title:"Annabelle",                    genre:"Horror",  rating:7.0, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/yAgxZUsi7ngNGc1rj2c2Kr8X5eT.jpg" },
{ title:"The Nun",                      genre:"Horror",  rating:6.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg" },
{ title:"Smile",                        genre:"Horror",  rating:7.1, ott:"Paramount+",     image:"https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg" },
{ title:"Hereditary",                   genre:"Horror",  rating:8.0, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/p9fmuz2Oj3HtEJEqbIwkFGUhVXD.jpg" },
{ title:"Insidious",                    genre:"Horror",  rating:6.8, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/nKShzp7xLYfY4Fn2X3vORO7g3xY.jpg" },
{ title:"The Exorcist",                 genre:"Horror",  rating:8.0, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg" },
{ title:"Get Out",                      genre:"Horror",  rating:7.7, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/tFXcEccSQMVl9dQ3HoMkf37L3bX.jpg" },
{ title:"A Quiet Place",                genre:"Horror",  rating:7.5, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg" },
{ title:"A Quiet Place Part II",        genre:"Horror",  rating:7.3, ott:"Paramount+",     image:"https://image.tmdb.org/t/p/w500/4q2hz2m7hubCH6MoLh6yzGaKUh.jpg" },
{ title:"Us",                           genre:"Horror",  rating:6.8, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/ux2maFen9L93UrTECl9SK6wK4Dv.jpg" },
{ title:"The Shining",                  genre:"Horror",  rating:8.4, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg" },
{ title:"Midsommar",                    genre:"Horror",  rating:7.1, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg" },
{ title:"Sinister",                     genre:"Horror",  rating:6.8, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/8MbiSacBxVqY1gHVRKvs4WT5KCHL.jpg" },
{ title:"The Babadook",                 genre:"Horror",  rating:6.8, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/29sHGDGJxLbHk9g4ZdO7k1bvuDH.jpg" },
{ title:"Halloween",                    genre:"Horror",  rating:7.0, ott:"Peacock",        image:"https://image.tmdb.org/t/p/w500/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg" },
{ title:"Scream",                       genre:"Horror",  rating:7.4, ott:"Paramount+",     image:"https://image.tmdb.org/t/p/w500/onTSipZQR3iIKfSqvKiXQs3larK.jpg" },
{ title:"Paranormal Activity",          genre:"Horror",  rating:6.3, ott:"Paramount+",     image:"https://image.tmdb.org/t/p/w500/bCkPKt5HanBqKpWRHKuRNN8FVLZ.jpg" },
{ title:"The Ring",                     genre:"Horror",  rating:7.1, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/aSaPEnMNQBF5eGFBulIXKqfkBDK.jpg" },
{ title:"Saw",                          genre:"Horror",  rating:7.7, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/eGR7hqdFVFhRTSGzMGsagH3ouBh.jpg" },
{ title:"The Witch",                    genre:"Horror",  rating:6.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/zap5tph0LINOR0kEWWuznGbSBER.jpg" },
{ title:"Evil Dead Rise",               genre:"Horror",  rating:7.0, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/dHKGGZmORUBqzMMLExI1WaU3rAc.jpg" },
{ title:"Nope",                         genre:"Horror",  rating:6.9, ott:"Peacock",        image:"https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg" },
{ title:"Barbarian",                    genre:"Horror",  rating:7.0, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/pTEF6QdwiyxQoUBEHR2ycLmPWWk.jpg" },
{ title:"Pearl",                        genre:"Horror",  rating:7.1, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/vDocQpXCRfO9jbJz4sWOEFVsQjG.jpg" },
{ title:"The Black Phone",              genre:"Horror",  rating:7.1, ott:"Peacock",        image:"https://image.tmdb.org/t/p/w500/uWpWCUiHidhevXNtNHAGAeaHuTE.jpg" },
{ title:"Talk To Me",                   genre:"Horror",  rating:7.1, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/kdPMUlgsHCPNBMGnkEkIBv1F3qN.jpg" },
{ title:"M3GAN",                        genre:"Horror",  rating:6.3, ott:"Peacock",        image:"https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg" },
{ title:"Skinamarink",                  genre:"Horror",  rating:5.6, ott:"Shudder",        image:"https://image.tmdb.org/t/p/w500/oiIqHhWORvJCRIbKLvkJTF1tnkH.jpg" },

// ================= ANIME (30) =================
{ title:"Your Name",                    genre:"Anime",   rating:8.9, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg" },
{ title:"Suzume",                       genre:"Anime",   rating:8.3, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg" },
{ title:"Spirited Away",                genre:"Anime",   rating:9.2, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg" },
{ title:"Demon Slayer Mugen Train",     genre:"Anime",   rating:8.4, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg" },
{ title:"Weathering With You",          genre:"Anime",   rating:8.2, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg" },
{ title:"Jujutsu Kaisen 0",             genre:"Anime",   rating:8.5, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg" },
{ title:"A Silent Voice",               genre:"Anime",   rating:8.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg" },
{ title:"Howls Moving Castle",          genre:"Anime",   rating:8.7, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/23hUJh7JdO23SpgUB5oiFDQk2wX.jpg" },
{ title:"Princess Mononoke",            genre:"Anime",   rating:8.7, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/jHa6bMFQmvxVkDMiRvODKA0UprB.jpg" },
{ title:"My Neighbor Totoro",           genre:"Anime",   rating:8.2, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg" },
{ title:"Nausicaa of the Valley",       genre:"Anime",   rating:8.1, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/ly3nYkSGKIf48sJXSRHkXJFiPgv.jpg" },
{ title:"Castle in the Sky",            genre:"Anime",   rating:8.1, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/rqEPKhxTWFRpHHVYfpovnLUBNpw.jpg" },
{ title:"The Tale of Princess Kaguya",  genre:"Anime",   rating:8.1, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/anJDKnf3VoRXKF9Z7oX5AouL2Tq.jpg" },
{ title:"Paprika",                      genre:"Anime",   rating:7.7, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/sFDPl2EhHPWOyKJJQEBAlb9FPJQ.jpg" },
{ title:"Ghost in the Shell",           genre:"Anime",   rating:8.0, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/6OHfPBSHrFBMgFBWlF0iNFCy9PB.jpg" },
{ title:"Akira",                        genre:"Anime",   rating:8.1, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/vSKsGdNDvFGsHEJGcRFTDKKNFfr.jpg" },
{ title:"Dragon Ball Super Broly",      genre:"Anime",   rating:7.8, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/bsRHhEHqCLVW6EuJH5cXKPiOcj4.jpg" },
{ title:"One Piece Film Red",           genre:"Anime",   rating:8.2, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/2F3IqBDFIsY3lePo7OMUi1G5bex.jpg" },
{ title:"Sword Art Online Ordinal Scale",genre:"Anime",  rating:7.5, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/z2HlC6YHoA2oaE6MXo0IzrSRRbA.jpg" },
{ title:"The Garden of Words",          genre:"Anime",   rating:7.5, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/bsN3fDfxPJRXy6wvF5JxqPj9VUK.jpg" },
{ title:"Wolf Children",                genre:"Anime",   rating:8.0, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/tKOKbcWNEF1ioiVqvFGFZEVxg9N.jpg" },
{ title:"Colorful",                     genre:"Anime",   rating:7.7, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/ePlmMzp0acBVDJJHpCjBTUbLe7N.jpg" },
{ title:"The Boy and the Heron",        genre:"Anime",   rating:7.5, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/f7DMvflQcAoxNejaukTDDOoP4yE.jpg" },
{ title:"Belle",                        genre:"Anime",   rating:7.3, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/dfaGSZh2PLp6GFBkbAc5TsTZ8MK.jpg" },
{ title:"Evangelion 3.0+1.0",          genre:"Anime",   rating:8.4, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/sRuiKFjMgMRXYxLpEkFgSjFCOHH.jpg" },
{ title:"Mobile Suit Gundam NT",        genre:"Anime",   rating:6.7, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/1W47GEEHiWyj4LwGRDxJBl4IJ4.jpg" },
{ title:"Promare",                      genre:"Anime",   rating:7.6, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/o3Ckl7V4DhiWMVbJBJmxYHkLDe3.jpg" },
{ title:"Night Is Short Walk On Girl",  genre:"Anime",   rating:7.4, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/aJdJbGiKfp7VCmA9fDPMbZiLBNV.jpg" },
{ title:"I Want to Eat Your Pancreas",  genre:"Anime",   rating:8.1, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/fJLNiLBrzpXjPO3JR9NPfEFYj4T.jpg" },
{ title:"Josee the Tiger and the Fish", genre:"Anime",   rating:7.8, ott:"Crunchyroll",    image:"https://image.tmdb.org/t/p/w500/1VQv7GaO6HHlIV0FGJbFnpGjwbj.jpg" },

// ================= COMEDY (30) =================
{ title:"The Hangover",                 genre:"Comedy",  rating:8.0, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg" },
{ title:"Deadpool",                     genre:"Comedy",  rating:8.0, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg" },
{ title:"Free Guy",                     genre:"Comedy",  rating:7.8, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg" },
{ title:"Home Alone",                   genre:"Comedy",  rating:8.1, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg" },
{ title:"The Mask",                     genre:"Comedy",  rating:7.9, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/xbbXp9px4o8Oe7IbGd0yIbla8mZ.jpg" },
{ title:"Superbad",                     genre:"Comedy",  rating:7.6, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg" },
{ title:"21 Jump Street",               genre:"Comedy",  rating:7.2, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg" },
{ title:"Central Intelligence",         genre:"Comedy",  rating:6.3, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/q95hVGvQYrhR8M0PP6Anq7M8WJQ.jpg" },
{ title:"Deadpool & Wolverine",         genre:"Comedy",  rating:7.7, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
{ title:"The Grand Budapest Hotel",     genre:"Comedy",  rating:8.1, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/eWdyYQreja6JiT7qSNkSJTodUCe.jpg" },
{ title:"Game Night",                   genre:"Comedy",  rating:7.0, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/fl9RBqSuTuUi9V5JjKMxJXBSQ5L.jpg" },
{ title:"Knives Out",                   genre:"Comedy",  rating:7.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/pThyQovXQrws2Y5KEpnEbBHSbRm.jpg" },
{ title:"Glass Onion",                  genre:"Comedy",  rating:7.1, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/vSRzsHowBJBNLJKGhSXEZIO3KVq.jpg" },
{ title:"Step Brothers",                genre:"Comedy",  rating:6.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/nVUcwCPaN7AubqqSp3oHFNSj4lO.jpg" },
{ title:"Anchorman",                    genre:"Comedy",  rating:7.2, ott:"Paramount+",     image:"https://image.tmdb.org/t/p/w500/byEBoEXiqjNGw9NtxROWWBFDe5M.jpg" },
{ title:"Borat",                        genre:"Comedy",  rating:7.3, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/8Ie1tqd8DhVIo4sCZbMz6mGjkW4.jpg" },
{ title:"Dumb and Dumber",              genre:"Comedy",  rating:7.3, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/f3hSIcKpBi2rCMqMqxlqpJrjxQl.jpg" },
{ title:"Bridesmaids",                  genre:"Comedy",  rating:6.8, ott:"Peacock",        image:"https://image.tmdb.org/t/p/w500/hFnuEhCrwL2MKk3ioP80VhDlO2x.jpg" },
{ title:"The Proposal",                 genre:"Comedy",  rating:6.7, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/y4vFC4F3GdnjNq2RmZNaIEuJvWO.jpg" },
{ title:"Crazy Rich Asians",            genre:"Comedy",  rating:6.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/lW2eVBJAiSnHGWlnH67qlELgYGl.jpg" },
{ title:"Jumanji Welcome to the Jungle",genre:"Comedy",  rating:6.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg" },
{ title:"The Nice Guys",                genre:"Comedy",  rating:7.4, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/zSpHAERAh1Gf9iFPkVT3M5IpUMC.jpg" },
{ title:"Barb and Star Vista Del Mar",  genre:"Comedy",  rating:6.6, ott:"Prime Video",    image:"https://image.tmdb.org/t/p/w500/fTDiDuGYfzWnmWkYzwFhJlY7dTu.jpg" },
{ title:"The Other Guys",               genre:"Comedy",  rating:6.6, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/iLI2aTKx5Ykf84FHPQ6bfYxkiPp.jpg" },
{ title:"This Is the End",              genre:"Comedy",  rating:6.6, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/uVjBcUm0sLH7eoGaujzb6OPqDOG.jpg" },
{ title:"The Internship",               genre:"Comedy",  rating:6.3, ott:"Disney+ Hotstar",image:"https://image.tmdb.org/t/p/w500/7ACvHEG8H2ghMmGC0bYiG6dxrxs.jpg" },
{ title:"Horrible Bosses",              genre:"Comedy",  rating:6.9, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/7Gu5sPWILlJoxHh5OqWJOm0YD1w.jpg" },
{ title:"Pineapple Express",            genre:"Comedy",  rating:7.0, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/p9rDpQoyCgakrnlmx7Sk7UGVKNA.jpg" },
{ title:"Ted",                          genre:"Comedy",  rating:6.9, ott:"Peacock",        image:"https://image.tmdb.org/t/p/w500/4FPAeNnSRUEt1RDVNQ0k5mQagQD.jpg" },
{ title:"Grown Ups",                    genre:"Comedy",  rating:6.0, ott:"Netflix",        image:"https://image.tmdb.org/t/p/w500/n3ZLnHnMRzC7G3bHhYJOYBFJAqG.jpg" }
];

const movieContainer = document.getElementById("movie-container");
const search = document.getElementById("search");

function displayMovies(movieArray) {
  if (movieArray.length === 0) {
    movieContainer.innerHTML = `<p style="text-align:center;color:#888;grid-column:1/-1;">No movies found.</p>`;
    return;
  }

  const html = movieArray.map(movie => `
    <div class="movie-card">
      <img src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>🎭 ${movie.genre}</p>
        <p>⭐ ${movie.rating}/10</p>
        <p class="ott">📺 ${movie.ott}</p>
      </div>
    </div>
  `).join("");

  movieContainer.innerHTML = html;
}

// Show all movies on load
displayMovies(movies);

// Search — filters by title
search.addEventListener("keyup", () => {
  const searchValue = search.value.toLowerCase();
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchValue)
  );
  displayMovies(filteredMovies);
});

// Genre filter — called from HTML buttons: onclick="filterMovies('Action')"
function filterMovies(genre) {
  if (genre === "All") {
    displayMovies(movies);
  } else {
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    displayMovies(filteredMovies);
  }
}