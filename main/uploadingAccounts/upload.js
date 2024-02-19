import { ref,child, set, get, remove, update,auth, database, stt, onAuthStateChanged, signOut } from "../user.js"
// import { gett, divs } from "./testing.js"



















































































let key = 'pk_test_1f50ed381e5b89385f8db1936c53e7b9d55bc039'


let referralProducts = 
`xeypqr165:6yM5EP9ANR2tWq5:lqiibjnzgxhkw39@gmx.com:6yM5EP9ANR2tWq5
xeypqr168:iwpROt9UXNg7zAG:pydpmknkakhup31@gmx.com:iwpROt9UXNg7zAG
xeypqr169:1SrSjt1ToeG3DUI:cqgqlasitbipw65@gmx.com:1SrSjt1ToeG3DUI
xeypqr170:xnIwftEqwzqTPSn:sohykdyocjnya75@gmx.com:xnIwftEqwzqTPSn
xeypqr171:4sOlMpAOfsEbHEm:xkwbosderbfyh48@gmx.com:4sOlMpAOfsEbHEm
xeypqr172:LogMHyLtt0k7z1X:vzfwgcokjgzqc38@gmx.com:LogMHyLtt0k7z1X
xeypqr173:PjGedeXzNiY6KNc:rizutuhyckyxw00@gmx.com:PjGedeXzNiY6KNc
xeypqr174:U1T0TVNlBK1tTmP:deeynfrkkqdnm32@gmx.com:U1T0TVNlBK1tTmP
xeypqr176:J3rLUxyXsWzedBZ:qrzuvthdodumf81@gmx.com:J3rLUxyXsWzedBZ
xeypqr177:uufJ9eYKKWscgId:ummammbjyyaul38@gmx.com:uufJ9eYKKWscgId
xeypqr178:HSbcDx7NOyJsMI5:ehgliewcmhnxj00@gmx.com:HSbcDx7NOyJsMI5
xeypqr179:W2WKXrKqCJin08q:nbuvirpapzhmx26@gmx.com:W2WKXrKqCJin08q
xeypqr180:TvkDpKCZgdVTz10:zknylicmddqvt18@gmx.com:TvkDpKCZgdVTz10
xeypqr181:Y9V0YM0vDjLNkA2:niuzkijddouww44@gmx.com:Y9V0YM0vDjLNkA2
xeypqr182:V4sa26exnsaNUXL:rjcjagodedzsg80@gmx.com:V4sa26exnsaNUXL
xeypqr183:SEcxMQXrpR0FSSV:fxofgvsrhokas23@gmx.com:SEcxMQXrpR0FSSV
xeypqr184:XZxkmNIcZnukGnL:bhncbzcrqinhn82@gmx.com:XZxkmNIcZnukGnL
xeypqr185:q4xnzlz3JNGw0yT:twkxyxtcbcknu00@gmx.com:q4xnzlz3JNGw0yT
xeypqr186:Uk4OG9dlUuHgqsc:ujesajbgpbjfg17@gmx.com:Uk4OG9dlUuHgqsc
xeypqr187:lLriak7v00LPbC7:lipsucpsxerkj38@gmx.com:lLriak7v00LPbC7
xeypqr188:l9T0qcjGgK8nBMJ:haswfzmkdjpyz16@gmx.com:l9T0qcjGgK8nBMJ
xeypqr190:jniiXIIv4l3o0T0:tgojoopkgeajh53@gmx.com:jniiXIIv4l3o0T0
xeypqr191:6QShwMDFLvYPb9I:wkfepnbrxltqd13@gmx.com:6QShwMDFLvYPb9I
xeypqr192:d09a31GIaZwUoJZ:ozdmfcunarsvk40@gmx.com:d09a31GIaZwUoJZ
xeypqr193:z1ahHLvqhaPx6dw:vlksnxkrifihk14@gmx.com:z1ahHLvqhaPx6dw
xeypqr195:At0evCetxMsrCjQ:nlknbujthdrdc19@gmx.com:At0evCetxMsrCjQ
xeypqr196:Tk8bt6RrTRe7oVo:ncniftowvpltw15@gmx.com:Tk8bt6RrTRe7oVo
xeypqr197:T7GlJH0qmmwOefK:wddojyrnbfjoa40@gmx.com:T7GlJH0qmmwOefK
xeypqr198:MmEw8tShDz3HEcD:knsrnyqavsegj50@gmx.com:MmEw8tShDz3HEcD
xeypqr200:Fdl0bJ49Cg2XVPj:volaslxxgesuw49@gmx.com:Fdl0bJ49Cg2XVPj
xeypqr201:bZXeyD3aZYhNlUu:qwbdcijgxghzi52@gmx.com:bZXeyD3aZYhNlUu
xeypqr203:xgcQBgi3afHHeks:iatmgokxwqfwh84@gmx.com:xgcQBgi3afHHeks
xeypqr205:ZjOpEUUvMbdpcol:giufnghpqeliy73@gmx.com:ZjOpEUUvMbdpcol
xeypqr206:wjPnomRw33fN7El:rnwklxpzsqccf50@gmx.com:wjPnomRw33fN7El
xeypqr207:EZhwJarbaXMHIL4:fqkehfncteejf95@gmx.com:EZhwJarbaXMHIL4
xeypqr208:OWkpAYebCjIqYBE:gbjjcwmvwbtjd28@gmx.com:OWkpAYebCjIqYBE
xeypqr209:njVpX1D13EqMwf7:roxaakquswfst04@gmx.com:njVpX1D13EqMwf7
xeypqr211:pn89CjRAUEqWu3Y:kqkehzlndlqgd73@gmx.com:pn89CjRAUEqWu3Y
xeypqr212:ifopLECsrLJn4sW:yzygootxmctux53@gmx.com:ifopLECsrLJn4sW
xeypqr213:mSJKiv8MrrFFt2w:zaterkngqawfh11@gmx.com:mSJKiv8MrrFFt2w
xeypqr214:DL1gfudryAgdHXf:guepoqjgpqwlt68@gmx.com:DL1gfudryAgdHXf
xeypqr215:62yjRvBSD3G9RSs:maherhgtjatsf53@gmx.com:62yjRvBSD3G9RSs
xeypqr216:R1EY9vSEbctm3a4:tdapjlmdvwjxx61@gmx.com:R1EY9vSEbctm3a4
xeypqr217:uScSh0YBUqkYVIH:jgykswarznnvl82@gmx.com:uScSh0YBUqkYVIH
xeypqr218:3F0dJ2rXdrlKQWM:apyglgtjtveea96@gmx.com:3F0dJ2rXdrlKQWM
xeypqr219:9QK3j5Ul7goId08:zoqgbgucqqkcx48@gmx.com:9QK3j5Ul7goId08
xeypqr220:M92MAXKXBKkYiHA:suogwnvmmlkfe77@gmx.com:M92MAXKXBKkYiHA`

let v = referralProducts.split('\n')




// update(ref(database, 'ageTwitterwithfollower/' + '1000'),{
//     years: v
// })
// update(ref(database, 'ageTwitterwithfollower/' + '2000'),{
//     years: v
// })
// update(ref(database, 'ageTwitterwithfollower/' + '3000'),{
//     years: v
// })
// update(ref(database, 'ageTwitterwithfollower/' + '4000'),{
//     years: v
// })
// update(ref(database, 'ageTwitterwithfollower/' + '5000'),{
//     years: v
// })





// update(ref(database, 'monthlyTwitterWithFollowers/' + '100'),{
//     monthly: v
// })
// update(ref(database, 'monthlyTwitterWithFollowers/' + '200'),{
//     monthly: v
// })
// update(ref(database, 'monthlyTwitterWithFollowers/' + '300'),{
//     monthly: v
// })
// update(ref(database, 'monthlyTwitterWithFollowers/' + '400'),{
//     monthly: v
// })
// update(ref(database, 'monthlyTwitterWithFollowers/' + '500'),{
//     monthly: v
// })


// update(ref(database, 'agetiktokwithfollower/' + '1000'),{
//     years: v
// })
// update(ref(database, 'agetiktokwithfollower/' + '2000'),{
//     years: v
// })
// update(ref(database, 'agetiktokwithfollower/' + '3000'),{
//     years: v
// })
// update(ref(database, 'agetiktokwithfollower/' + '4000'),{
//     years: v
// })
// update(ref(database, 'agetiktokwithfollower/' + '5000'),{
//     years: v
// })


// update(ref(database, 'mothlytiktokwithfollowers/' + '1000'),{
//     monthly: v
// })
// update(ref(database, 'mothlytiktokwithfollowers/' + '2000'),{
//     monthly: v
// })
// update(ref(database, 'mothlytiktokwithfollowers/' + '3000'),{
//     monthly: v
// })
// update(ref(database, 'mothlytiktokwithfollowers/' + '4000'),{
//     monthly: v
// })
// update(ref(database, 'mothlytiktokwithfollowers/' + '5000'),{
//     monthly: v
// })

// update(ref(database, 'referralWithFollowers/' + '100'),{
//     referralProducts: v
// })
// update(ref(database, 'referralWithFollowers/' + '200'),{
//     referralProducts: v
// })
// update(ref(database, 'referralWithFollowers/' + '300'),{
//     referralProducts: v
// })
// update(ref(database, 'referralWithFollowers/' + '400'),{
//     referralProducts: v
// })
// update(ref(database, 'referralWithFollowers/' + '500'),{
//     referralProducts: v
// })


// update(ref(database, 'agewithfollowerAndPost/' + '1000'),{
//     years: v
// })
// update(ref(database, 'agewithfollowerAndPost/' + '2000'),{
//     years: v
// })
// update(ref(database, 'agewithfollowerAndPost/' + '3000'),{
//     years: v
// })
// update(ref(database, 'agewithfollowerAndPost/' + '4000'),{
//     years: v
// })
// update(ref(database, 'agewithfollowerAndPost/' + '5000'),{
//     years: v
// })


// })
// update(ref(database, 'agewithfollower/' + '1000'),{
//     years: v
// })
// update(ref(database, 'agewithfollower/' + '2000'),{
//     years: v
// })
// update(ref(database, 'agewithfollower/' + '3000'),{
//     years: v
// })
// update(ref(database, 'agewithfollower/' + '4000'),{
//     years: v
// })
// update(ref(database, 'agewithfollower/' + '5000'),{
//     years: v
// })



// update(ref(database, 'ageAccounts/' + '2023'),{
//     oneYear: v
// })
// update(ref(database, 'ageAccounts/' + '2022'),{
//     twoYear: v
// })
// update(ref(database, 'ageAccounts/' + '2021'),{
//     threeYear: v
// })
// update(ref(database, 'ageAccounts/' + '2020'),{
//     fourYear: v
// })
// update(ref(database, 'ageAccounts/' + '2019'),{
//     fiveYear: v
// })
// update(ref(database, 'ageAccounts/' + '2018'),{
//     sixYear: v
// })
// update(ref(database, 'ageAccounts/' + '2017'),{
//     sevenYear: v
// })
// update(ref(database, 'ageAccounts/' + '2016'),{
//     eightYear: v
// })
// update(ref(database, 'ageAccounts/' + '2015'),{
//     nineYear: v
// })
// update(ref(database, 'ageAccounts/' + '2014'),{
//     tenYear: v
// })



// update(ref(database, 'monthlyTwitterAccounts/'),{
//     monthly: v
// })

// update(ref(database, 'monthlyinstaNoFollowers/'),{
//     new: v
// })
// update(ref(database, 'monthlyinstaWithFollowers/' + '1000'),{
//     monthly: v
// })
// update(ref(database, 'monthlyinstaWithFollowers/' + '2000'),{
//     monthly: v
// })
// update(ref(database, 'monthlyinstaWithFollowers/' + '3000'),{
//     monthly: v
// })
// update(ref(database, 'monthlyinstaWithFollowers/' + '4000'),{
//     monthly: v
// })
// update(ref(database, 'monthlyinstaWithFollowers/' + '5000'),{
//     monthly: v
// })
// update(ref(database, 'monthlyFacebook/'),{
//     new: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2023'),{
//     oneYear: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2022'),{
//     twoYear: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2021'),{
//     threeYear: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2020'),{
//     fourYear: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2019'),{
//     fiveYear: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2018'),{
//     sixYear: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2017'),{
//     sevenYear: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2016'),{
//     eightYear: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2015'),{
//     nineYear: v
// })
// update(ref(database, 'ageFacebookAccounts/' + '2014'),{
//     tenYear: v
// })
            
// update(ref(database, 'ageAccountsWithPost/' + '2023'),{
//       oneYear: v
//     })
//     update(ref(database, 'ageAccountsWithPost/' + '2022'),{
//           twoYear: v
//         })
//         update(ref(database, 'ageAccountsWithPost/' + '2021'),{
//               threeYear: v
// })
// update(ref(database, 'ageAccountsWithPost/' + '2020'),{
//       fourYear: v
//     })
//     update(ref(database, 'ageAccountsWithPost/' + '2019'),{
//           fiveYear: v
//         })
//         update(ref(database, 'ageAccountsWithPost/' + '2018'),{
//               sixYear: v
//             })
//             update(ref(database, 'ageAccountsWithPost/' + '2017'),{
//                   sevenYear: v
// })
// update(ref(database, 'ageAccountsWithPost/' + '2016'),{
//       eightYear: v
//     })
//     update(ref(database, 'ageAccountsWithPost/' + '2015'),{
//           nineYear: v
//         })
//         update(ref(database, 'ageAccountsWithPost/' + '2014'),{
//               tenYear: v
//             })
            
            
            
            
            
            
            
            
            
            
            


// update(ref(database, 'ageTwitterAccounts/' + 'new'),{
//     monthly: v
// })

// update(ref(database, 'ageTwitterAccounts/' + '2023'),{
//     oneYear: v
// })
// update(ref(database, 'ageTwitterAccounts/' + '2022'),{
//         twoYear: v
// })
// update(ref(database, 'ageTwitterAccounts/' + '2021'),{
//   threeYear: v
// })
// update(ref(database, 'ageTwitterAccounts/' + '2020'),{
//   fourYear: v
// })
// update(ref(database, 'ageTwitterAccounts/' + '2019'),{
//   fiveYear: v
// })
// update(ref(database, 'ageTwitterAccounts/' + '2018'),{
//   sixYear: v
// })
// update(ref(database, 'ageTwitterAccounts/' + '2017'),{
//   sevenYear: v
// })
// update(ref(database, 'ageTwitterAccounts/' + '2016'),{
//   eightYear: v
// })
// update(ref(database, 'ageTwitterAccounts/' + '2015'),{
//   nineYear: v
// })
// update(ref(database, 'ageTwitterAccounts/' + '2014'),{
//   tenYear: v
// })
// update(ref(database, 'products/'),{
//   referralProducts: v
// })

