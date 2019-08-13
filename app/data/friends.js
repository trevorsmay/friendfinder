var friendsArray = [
    {
        name: "Martha Stewart",
        photo: "https://assets.marthastewart.com/styles/wmax-300/d40/qvc-martha-stewart-collection-merch-0118/qvc-martha-stewart-collection-merch-0118_sq.jpg?itok=EJB8oD2H",
        scores: [
            '3',
            '1',
            '1',
            '1',
            '3',
            '1',
            '3',
            '2',
            '3',
            '1'
        ]
    },
    {
        name: "Trevor May",
        photo: "https://media.licdn.com/dms/image/C5603AQHbjGZC8bO5Uw/profile-displayphoto-shrink_200_200/0?e=1566432000&v=beta&t=F3z-O8fYl2q4GNB4VR_6pOiRfYGuYvpDDvVtViZi6TI",
        scores: [
            '3',
            '1',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '1',
            '3'
        ]
    },
    {
        name: "Donald Trump",
        photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEBIVFRUVFRYWFRUVFRUVFRUWFhYWFhUXFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGC0gHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIEAwUFBgQGAgMAAAABAgADEQQSITEFQVEGImFxgQcTMpGhFEKxwdHwI1Jy4RVigpKi8TNDJLLC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQIAAwQFBv/EACkRAAICAgICAQMDBQAAAAAAAAABAhEDIRIxBEEiBRNhUbHwcYGRoeH/2gAMAwEAAhEDEQA/AKXtHYXmLxA1MuuOcTBJmarYm8E3sogtDJWHaBTeOWiIYjM8bNSO1lkYxiJWLBjipEUxHhIKwssKE5jYeAlC8sSwgzwi0YIhhEERwmJIkHTG7RaCGEi6aagDcmwHMnoB1ksjYsCOUcM7uKaIzOxsqgEsT0Am97F+y7F4orVrr9no3BzVB32tY92nv87eu07RwjheFwCZcNSCnKAWt3ntoMx5xWyRg2ci7M+x3F1gKmKyUAdlc5nG/wASLz20uN9ek672X7IYXAUwqEu1u87ffO98uw+XIReI41YXJvpyt1tpEYGnUr6m+Xqdh5RbstUEi9pYqmNEF/Lx8ZKp1L8vwlUiBSApBA3O/wAv1lqgCrc8ucZJkdDmaVvG+AYXG0/d4qilVTtcWK+KsLFT4gyQ2IHXkNOWt7/jG6mLVXtytr4c/wBIQUc44r7DcGwJw1WrTbkHK1F8Bqt7fWc57aey3G4UmpSomrT2PuQXy7WIX4suvMXFvWelKdckQxWN5LJxPF1ai9M2qIyG5FmUqbg2IseYMbLz1t2y7GUOIUyGAVyQS1h37C3eNiQbbMNR5aTzj277Gtw+s1MMzAAEXGtmv032te1j8wCLRlCYUEKEJNwOIynzl5TrgjeZcGOLVI2JjxlRXKFlrxE6GUsU7k7m8TBJ2NGNAgggijFzXDsxuDGGokbi069Q7IDe0hcZ7Id05VgcShSOZIscAkrHcPakxDCQi8UYKqsiuklkxspeEUjw7x40YfuYKIRWa8LIZMWlFmhHUQ2QCIVPW48Db01/IyRWpyKCQbjQg3B6EQtDR2EDHKNNnNkUseg1MkYdBWcLZVdr2IuFY9Co29LeXMdF9nHYk4llaug9yahz5fhOQCyFbXuc+p5C3XRWNRlOyfY/F42siUaTZSQXcqQqLchrk6XsDpzvO+9m+wuDwI1XO4uSSTrY6Fte8bW8LjaXi4mnRp+7oKFVQAALDTTa2nMSDisZYNmvma4HO2nP6StyLIwHsZj8xOY2VeQ2tmCj01+kg8Qq3YrfUFRb+oqB+cgozMwcHQLqBrpcEDzuAYximf42YBiBqCNl27p2MQtom8KFMuzVWtp3V5fCpH1b6S3/AMWBYKmiAC1uo6zEvigCSWG97bn6R/B8aAOwPrlP13hTD9ts6NhgH1ta49DI3FKrIosCddD3bW5httCJUYHtXh8hvdWUElbEE+KHYnwlPju0Pv2Ug2QHVtiR5cuUfkhFB3stqfEMtydVGtuZOyj99IxSxhLG9yznN4ga/heQKXEFzWO3QeWkdoY1QwI0AuQedmOvroY6RDUcOBdbo4JH3TcHf9iWlBbi7Xv0PKZ/B49bhha40uOd+duWvKWlLiQJtfnBoV2WWXS05b7aeHZ8Galv4lBu6droWLgA8yMgNvO24nTqNXMJSduOz4x2EqUCbMbMhBIs6m4uRrlOoPgTCKePrQrS04tw+rRcrWXK12BXbKVNiMvK3SQCslichsCC0WBFZZLJYxBFMImEYEEEEhD19SwQtG8XghbaTVrC0j4yuLRio5x2u4CjgkDWcjx+FKOVM7fx3EjWcm7SgFyR1iyiBFIkeRYSLHVgUSBe7g91Flok1I6iQUqCLKRkVI8usaiETEJKuqtjLussrcTSgYU6G+HVylVGG4ItqQNdNbec6h2Z7a/Y6dOjSw1TLZnqKh2ZmJOw72w0J2sORE5PaSTi2trYm98xHe+exPiRfxlT2WWelcJxWnXQNQcZioLUyQGGZQbEHY2IuPKQ63FKWxzCpYnIwsbXAzdRvsRecF4d2gr0W7rkLoHC2UsoGW2YC9wNjysOk33AVYUTUqYhq3vSGVmuWCHYG/3r3v6SufxVl2FOcki3xnGXJ7pyjoP35yNVxlTXM97dDofKRmTn+cOmt95ic3+p2I4opdClxDH++scRmY26w0p22juEWzBj1P0jRbbBOKimxJpHSShoAP31/KM4isL6cv3+UjviL6HnqJoToxSVk+pXsQR6R6jifHb9ZUtU0B8dI0uKI19f19I/JlfFUaheI5Toef6STg+LXci/Q+ux/wDz85l0xIYb+Xn+kYfEMrZhy3gbFpM63w7im2svKdcNYdR/acs4TxHNYg/XlyM2uCxdwpB+E/Qj/qHkVuJxz24cG93ilxASwqot2GxqAlSpH81gGv8A1dBOYMZ6M9qNO9OwNhURsoKhlL6W+K6+a21GbpcecKj3N7AX5DYeUdbKJR2FeKvEQXjUSgmiYZMKEKCghwpAnpnG8fVBqZQ4vtqhBAOsz/aarobGYPEVjrrHKDZcV7QBgSWmNxuMzteQGY8zEZoQ0SxViveSIrxeaSiDzPCLxkwCQg8KkkUnkNY/TMICYwkOuslIbiN1FkIVNZbGIkrEJIcqaGRcdmMHRrYqnTxVUUqTGzMbjwAuActzbU6CdMr8Mp0FWjSdmRNEYkXItubaTjoM1vY73jJUJY5Lqqi+lwNbDlYFfmJRmj8bNnhtrJS9mpqW638o/h0jOEKDRyA3joD03kuoltRt6TG4nYTfsDCPuLDSQ3qdD+nz5x6m9x4/vaGL2LNWiJXfr9JDev4X8gZaVqXpz5SN9nHn6y7oyuNlW+JI2uIj7S/T9+Ut2wo5WHlCXh67/rLIspnB9lOlZhtYX5G4H9o/9oa1rqfUE/vzlzhsAOgPibflJFfhiZb6elvxlyjoySk0yl4fjzRYE3C87jbyPT9+fT+zuJFRcym4Itv01v6fnOaV8OinvXAvuNSPMfeHl9Zcdj+InC1hTzZqNRhlPJT0vyB/GVTjW0WRlembbtjZcKA9irE0luLlatXu0WB+6MxKk9Gvynl6shUlSCCCQQdCCNCCOs9V9reHjEYGtTF9AtRcvxEKb2Gh1sGH/c839uqQXHVsuzFam1v/ACItQ6cvij4+iufZRXgvCglgoIIUWBIQK0KLgkAb/jeOFjMdUq3krHYwtK7NHKkgyYkiHBCEUgjtommI5aEAkwhFNCkAKWOrGljgMhCRSMWwnVOyHAsEqJQxeGSoXAz1Tf3is3JWBuoF7aW2nPu03DBhcXXw4OYUqhVSdyu638cpF4IyT6LMmKUKb9lDiFlbUFjLeqJW4lYJCx7GqSFiFUXJIAA3JJsBOnYDBCjSRB9wWJHNjqx8sxP0mT7B4IVK7Of/AFLdf62OUH0GY+YE2uKBGii4t85jzyv4nV8GFXNjecfeXMDJdGqPukgdOUq8HVzEg7jr0MmoJltnQpPY+Rfp5/3gTSBWvFgdZKCiUi5tYGpCIpsBAKlzLVLRTLHsZxFYU1ZrZsoJsCOUjI5cFuW4/fKMdqu6EFIkvcnKBc5bEG4HLaO8PcshYixKjS1u9sRC9bGxxTJIxLgUyrsCTY63B3tcHyEsnxZYd9QSOY0P/cqgl7W+7t5/v8ZPpd4a/v8AZl8JOjF5ONcrSK3G0kYkgm/PmfW2/nInDlyuO+pF/H6qRLbFYXNcjcfPylDxBjT15iLJlEYnY+AYwVKYV9dCjbaqwFjcaajLt4zz77T8K1LGmm9rqltP5RUqCn/wCTpnYjiGarkBtmpDTcXBfKR46Lp4CYL201L8TcaXVEBseZLPr0NmEmF26EyqjBwGHaFNBSASRSWMLJeHHKBsWQhqMKXaYHQQRbF/uVDRuTqmGPSM/ZzfaXATEKsUKce9yekcWiekIBhFi457s9IDTkIMNCAlzwLgFbGVRSoBb2uWc5UQdWax+QBPhNlX9j2NT3R97QdXdVZkZ/4YP3iGUZgPDXbzEtB4tnOFWTOGYfPWppa+aoi28CwB+k7niPY5gVo2VqxqAa1c+p03CWy+lvWc57OcBalxFkbvfZszkjQHSyHwvnBt4QOSqxo425JG5o4Z3roFtcuNPWcr7T4732NxVT+avUt5Biq/QCde4JV/+TTLaANe/lOFGrmYt/MSfmbyrAuzZ57dxQtxIGJpyztGKyS9nPsicH4pUw1TPTttZlOzD9fGargPHquJrZAoUBGY3OawXoLDmRzmMrprLnshxanhqrmovxpkD75dQTp0NrXmbJBNPWzb4+aSaV0jYUcO3vPeMRqCNBa/ifl9ZOtFq6OgZCCCNCDof0iRqJz32duL0BWtHFqaRgwMYUNocepaEatrERoN1hZbxxGSuHMjMapUZjoTzIUkDXyj+MYKLk6nYdZWIhXRTCY9Tcx47WxW6eiVh201kmniADv5+PkeRkOmY4F6x7KJRvsv8Hkqd06Hly/78ozxTs370WNwTs34XjHCMHUqOFTW+puNFHM35To3DsBlCqSWtbU85pjDmraOZmlwlpmQ7DdnXoVleuAoVQFNxZ9T8PMkDla85N7T8ctXG1NBdDZHU5kq02JdG1OlgwA8BysBO/e1CiRglqUzZ6Nak6200JyP/wAWJHiBOS+1jsiTTTimHTu1EU4pVHw1Da1Ww2Dc+hseZhjhUY2iueRyls5XCMOJkAASfw59ReQJO4VTu4gl0RmvpYc2EEbSuwEEqplY9VwHhGv8O8JqBhRFfYhOjwM3NmYXh/hF/YPCaUYIQxgpOBObMv8A4f4SdwzsxVxF/dICF+JmZUUX8WOp8Bcy6OCl1wmqtMZF+Iakc7nf8pVlkoIvwQeV0ROx3D2wzVEdQHzKeRBAGljzHemn4rxt6jJTawAU2t1BAv52MoOP4ko1OuN1OVvFW028DY/OMVMWQ61Mt1sflofymPJk2zq4cCpGn4d2gqUSV1YdGJI9IzxLh1OjUGMpLZMUEV+YRkBGW55Hf/SfCUGEx4qOxtbUaeBE13BOIJUU4Ssbipoh07p3HlrApKSqyycOElJrrspq7+7w+KrIbGnhqzL55Co+pnBxppO69psM1PhuKbS7ZaBA3B96mb6Azh2LSxl+FVEweZK8lEqk2kTVEboNpFVGlpkorsUNZGIkjFmR7yuQ8TW9kKDoL+8yGpqqsCUyqCS7AbZrBRbr5TXI+uosTa43seesqcJxPDvToph/i92oZSe9mVQDcHpawt5yaH1mDM/kd7xopQVMfcQiNN4YaBllSNI1UUxNIx0rDROcdChekUIG8IS9YyYGgyTJ/CeHPiHCUxc8zyUcyT0iOF8NqYioEpjoWY/Co6k/lOn8H4YmGTJTGu7Md2PU/pNOHHy2+jB5WdQ0uw+EcKTDoETU/ebmx/TwlgptEXkXH4taaMzEAKCSTsANSZuS9HIk72zH+17tIBTpYZT3qjai/IWufqPnL/s5xFPdIrWKlQtiO6Ra1iOk4DxvjpxmNNc3y5gKYPJFOnqd/Wbel2iUKi5ypvuDyt4y7gnGkVttOx/tf7FS9R63DatNVbvLh3BUKeapU1Fr3sCBba85JxrgeJwj5MVQqUm5Z1IB/pbZh4gmei+D9qLpqb2KjpuGP5S8/wAUoVlNOsqsp3WooZT5g6TPLE0XLIeSFGsssM1iCOU7f2o9keExN6mAYYarvk1agx/p3T/Tp4TlvGuxuOwNzicOwQH/AMqfxKVuudfhH9VpU1Q9phJiVsNYJUCpBK6BxOpKY4DGlaOBp0TCLDQw0RmigRIQcRtdZGxmLdWzCixtse7t4ayXQALCT69HMJg8zbSOt9OpJtoq8fxGk1Bs17sp7ttb20Eol4zVNMIQqkjLcan0EvcVgAQQx0/CQcDwo+8DD00/HxmJ20daHGOwcDwzakaAC5JIudbc995oUre7ZKhF8rK1tgbG/KH9jCra2vxDrcawcRKkW+vWRRoSeTmy79qGUYFQigCpXDaC17oz3PU3I1nB+LUJ2jtlxJa+EwqjcBs3gVVR9Q15yzi2G3nTxr4HAyusjTM3hzHHiQlmMfySAKvFCRVlji6ekrZVIsia/wBniJnrs1swpqFB6M3eP/FfnNQVAnN+B16qVlagpdtioBOZTuDbbznQ/stfIGdAlxezOtx4EC8zZcE5u4qzp+L5GLHDjJ0xY3uI620r6GM3zaHpePjFDkZmcWnTOhGSe0SYWaIFURtqohQRbPaW/Z/gNTEm/wANPm35DrH+zfZ9q5DODk/H+06PhcOtNQqgAAcpqxYb2zB5PlV8YjfDcAlBAlNbDn1J6k8zJd4kmNs82LRy3vbHGecr9sfaXJTGDpnvVRepblTvoP8AUR8ges6HxDGCmjOxsqqWJOwAFyflPNHH+KNisRVrt99rgdFGiD0UCWJiNEegbax77YwN77eUihokyy6WhKNPwzj7pRqG9+/S+RWqP0krCds6inmPWZbCt3aq9UB/2up/+uaMBpOTJxOs8H7ebAtY+GnmZteFdsw4+IEdGFvqNPpPOi1LSxwXG6lPYyfF9g2ujv8AV4XwyoTUfAUGZtSfd09T13EE43T7buAAQfnBF+3EPJmrVY4FhKYsGOZwwsMJFKYsGQgeHFmEtC2gEq2Okfo4jbWc/wArU0zseArg1+R7GUbgfSP4VABfwjZe9tYw7NraZeRuatUS8TiBlvz/AA/ekznFeIkAIupJsoG+uw/KP4/GZV10PjIvZzD+8d8RUtanZUW+7sDr5AXPmRGjHm0kVyksUW2T3wxVFQ7qtm8WOrH56egmf4ph5q2ItKXiVO86yikqOBOTlLkzBYilZoYEn8Qo2JlerSposTGcQJL4JwaiX/8AkXZt/djQAdXb8pFrVstgvxtoP8o6+cfGK90uRDqfibmxjY8a7kFt+jU4zjlOioSmqiwsFQBQPlvM/i+L1KhuSbdJUZyxj1uQ9fCX8/0EUUHXrnrHsBiSoZmJItpcmw8Ya1wLZEUEfeIzMT4X0HoJC4rXstr6tqYk0q3sshKSfxdE3B9oy1RUZe6WAJBNwpOpA62vJFeu7ucrFUuco0DW5ZiOcp+BYQ96qRoNB5nQn6gestntY28pxs+pJRPV/Scf3ccsmXdM7p2J43SxWHGSy1EAWqnMHkwH8ptp6jlNCZ5z4Hxmth6yVaJs4Nrbq4JF0bqD/flPQnDcX72mr2ykgEre+UnlfmPGasGTkqfZy/qXixw5Lg/i/wDX4HiI04jrRivUCgkmwAuSeQl5zTnPti437nDLhkPfrnXwpL8XzNh5ZpxWXnbTjhxuMqV/uXyUh0prcL89W/1SjjiMO8Q9SAmAkcxIRIQHMcBiGA5QXkQXsWWiS8TEmSwpC88ERBByDR2gCLAjamLBl5hHQIuNhpnsVUr8Rr/YcCdP/fW1yIuxuRy8tzoIG6GirY6nHXxOIGGwKe8sc1WofgSmp75B8tLnmQBe80NOgM2w/OW1DgtDhmCelhxrlvVqn46rAbnoN7LsPO5kehSep8FNm8QpI+cw+RFyas63iNQi6CyAAEAb8pHxNe3K0s8TwwohevUp0VGpao4FvlMTx7tngqV1ompin6r/AAaP+43ZvQDzlCwyfo0SzwXuwuKYu5sSAL7sQAPEsTYDxl9wrIcNRansQxJ/ma+rDwtYek49xXi9TENepZRyRBZR8yST4kmdM7BYvPgil9abAjybT8ZswYlH+pz/ACs7mqXRe2kPG0tJLDxvEm4mkwmN4nR1MzmK7pJPKbPiFPeZDi9gwvy1t1PKK1bGiyCDluzfE30EaZ7xDOSbmLprJY5JoLYXii3L5xDvYRoNDZCVTPM8pU4hjUew1JIAHUnQSZjKuVbczvLTsHwv3tVq7j+HQUsx8bH62BPyleRluKNskVKPulFBW0UAtpuwvz6d4n18JFU5tR1sfDXeSazmpmfYuxJ8LnYeEg/eyiciUm5cj2+LEsWKOP8AlnYuyvZ7BrSXKuZyoLO2pJtfQ8h4CXLmrTIak1wPutuR0vKT2c3bDXa/dJUeAB5TVCdKCVJtHlPIclklFu6bRLwmMFVcw0P3lO6npMJ7Wu0HuMIaSGz1yaa23y2/iN5WOXzabP7OB3hppY20+c8/e0XjQxWNcob0qX8Kn0IUnMw82vr0AltGRszMKAmLw7KHU1ASgILAaEjmL8r7XkFJ54HVKI6qWLLmyAXYKdVIA3utm9RKsjrNxw7tyuU+/p2qKrZWQd1juFtut9B0mHxNZmJZjdmJLE7knUmDl+C2UUunY3e5iolRFSIVhGFDMKBkChwoIgTsYMWDGQYHUEEHYgg8tDNZgMt2s7Tb0KDeFRxy6qp69TNz2I7S4HBcOpkBVzC9Q5hnqVNmJ56G4A5ACcf49wtsNVKG5U6o3Vf1GxkCZ3N3s2RgktHa8d7XsMP/ABUWY/0j8TMrxf2r4yrcUQtIdfib05D6zn0ODkNRK4jxKtXbNXqvUP8AmYm3kNh6SKIIBAQOb/2Z4wXakfvKw+mn1tMAZY9nuIGjXpvyDrfyJsY8JUxJq0deFSGzXEPiWEak1jfKwzKSLXHj4iRw0uMxW8TYKrMdAASfITnGMxJqOWPPYdByml7X8XUg0aZvr3z5fdmTiyY8EKUSTTW0ZpxbPAhwna5ik6xkRVRrCSyEfEMWPUnYCdTx/DP8P4TTonSrXYGpbe577D0ARfnMv7MOA/asarMP4dC1R/E3/hr/ALhf/SZrfa1jA1alSBv7tCT4FyPyUfOZs8qgzqfTcfLPH8b/AMf9MKajWssXhMNbVt+kXh2i6lTpOcj1/BXyZ1/2fUCMFS/zF2+btb6WmoFECV3ZvDe7w1BDutJAfPKCfqTLJzOrDUUjxHky5ZZSXtv9zM+0Pjf2PBVXU2qOPd0uudwRceQzN/pnnSb72wca99ixh1Pcw418ar6t8lyj/dMEY6M7YkxMVEyEBECG3SGBF7YwUOCAxiCTChmCKwhQQQRCHYq1EqdYgGCCajAyu7QcLGJpFfvjVD0bofA7TmVraHcQQSnKtpmnA200CCCCVlwIYhwQoATQ6R1B8R+MEEi7I+j0v2joLUpWAsyjMvgbajyI/KYWl2pw2FZjWR3cDuKoFgSNySRBBNC6M77OXV6mZix3Ylj5sbxAMKCVjjqwmaCCEAQMRWaCCAK7O1ezvCpgOFnFOLmoprNbUkbU1+VvVjOc8UxjVarVKhuz94+Z1sPACw9IIJi8p7o9H9IiuDl7uhmmdJN4Vhve1qVP+eoi+hYA/S8EEzwVtI7WWTWNtek/2O/CQuOcTGHw9WuwuKVNnsOZA0HqbCCCdQ8OeZcTXao7VHN2dmdj1ZiWY/MxkmCCEQTEsYIIG9DISsVBBIugghEw4ISCYIIIjCFBBBFIf//Z",
        scores: [
            '1',
            '3',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '3',
            '1'
        ]
    },
    {
        name: "Oprah Winfrey",
        photo: "https://media.extratv.com/2019/08/07/oprah-winfrey-getty-825x580.jpg",
        scores: [
            '2',
            '3',
            '2',
            '1',
            '3',
            '1',
            '1',
            '2',
            '2',
            '1'
        ]
    },
    {
        name: "Tonya Harding",
        photo: "https://www.biography.com/.image/t_share/MTYxODU5Mjg2NTc2NjcwMzMz/kristi-yamaguchi-tonya-harding-nancy-kerrigan-and-tonia-kwiatkowski-poses-of-this-photograph-at-the-us-figure-skating-championships-circa-1991-at-the-target-center-in-minneapolis-minnesota-photo-by-fo.jpg",
        scores: [
            '1',
            '1',
            '1',
            '2',
            '1',
            '2',
            '1',
            '3',
            '1',
            '3',
        ]
    },
    {
        name: "Jessica Biel",
        photo: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/06/jessica_biel-getty-h_2019.jpg",
        scores: [
            '3',
            '1',
            '3',
            '3',
            '3',
            '3',
            '3',
            '3',
            '1',
            '3'
        ]
    }
];

module.exports = friendsArray;