import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    articles=[
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Lauren Hirsch, Mike Isaac",
            "title": "Elon Musk Threatens to End Twitter Deal Without Information on Spam Accounts - The New York Times",
            "description": "Mr. Musk’s lawyers said Twitter was “actively resisting” his requests.",
            "url": "https://www.nytimes.com/2022/06/06/technology/elon-musk-twitter.html",
            "urlToImage": "https://static01.nyt.com/images/2022/06/07/business/06musk-twitter-print/06musk-twitter-facebookJumbo.jpg",
            "publishedAt": "2022-06-06T22:08:37Z",
            "content": "Mr. Musk, who has complained about Twitters fake accounts and bots for weeks, has appeared to get some traction on the issue with others. After Mr. Musks letter to Twitter became public on Monday, Ke… [+1720 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jay Peters",
            "title": "iOS 16 lets you turn on haptic feedback for your iPhone's keyboard - The Verge",
            "description": "iOS 16 will let you turn on keyboard haptics, meaning you’ll feel a tiny vibration every single time you press a key on your iPhone’s virtual keyboard. It’s just one of many features Apple revealed during WWDC 2022.",
            "url": "https://www.theverge.com/2022/6/6/23157083/apple-ios-16-haptic-feedback-iphone-keyboard",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/hEtgK3DILVp4vq2tArLlLWVV_6w=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21973382/akrales_201017_4238_0143.0.jpg",
            "publishedAt": "2022-06-06T21:22:08Z",
            "content": "Now you can feel every letter you type\r\nPhoto by Amelia Holowaty Krales / The Verge\r\nApple announced Monday that iOS 16 will let you switch on haptics when you type, meaning youll feel a tiny vibrati… [+841 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Hannah Rabinowitz and Katelyn Polantz, CNN",
            "title": "Proud Boys leader and top members charged with seditious conspiracy over January 6 - CNN",
            "description": "The Justice Department on Monday charged the head of the Proud Boys, Enrique Tarrio, and four other leaders with seditious conspiracy in the January 6 US Capitol attack, escalating the criminal case against the far-right extremist group.",
            "url": "https://www.cnn.com/2022/06/06/politics/tarrio-proud-boys-charged-seditious-conspiracy-january-6/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210820161515-enrique-tarrio-feb-27-super-tease.jpg",
            "publishedAt": "2022-06-06T21:20:00Z",
            "content": "Washington (CNN)The Justice Department on Monday charged the head of the Proud Boys, Enrique Tarrio, and four other leaders with seditious conspiracy in the January 6 US Capitol attack, escalating th… [+2758 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": null,
            "title": "Sources - DT Aaron Donald gets big raise from Los Angeles Rams in reworked contract - ESPN",
            "description": "All-Pro defensive tackle Aaron Donald is returning for the Los Angeles Rams with a big raise that will make him the highest-paid non-quarterback in the NFL.",
            "url": "https://www.espn.com/nfl/story/_/id/34048688/dt-aaron-donald-gets-big-raise-los-angeles-rams-reworked-contract",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0201%2Fr968450_1296x729_16%2D9.jpg",
            "publishedAt": "2022-06-06T21:09:42Z",
            "content": "All-Pro defensive tackle Aaron Donald is returning to the Los Angeles Rams with a big raise that will make him the highest-paid non-quarterback in the NFL.\r\nThe Rams reworked Donald's deal to give hi… [+2649 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Leah Bitsky, Sara Nathan",
            "title": "Prince Harry, Meghan Markle release new photo of daughter Lilibet after Jubilee - Page Six",
            "description": "The Duke and Duchess of Sussex’s 1-year-old met Queen Elizabeth II, after whom Lilibet is named, for the first time last week during the monarch’s Platinum Jubilee.",
            "url": "https://pagesix.com/2022/06/06/prince-harry-meghan-release-new-photo-of-daughter-lilibet/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/06/lilibet-meets-queen9-1.jpeg?quality=75&strip=all&w=1200",
            "publishedAt": "2022-06-06T20:45:00Z",
            "content": "Prince Harry and Meghan Markle released new photos of their 1-year-old daughter, Lilibet, following the Sussex family’s visit to the UK for Queen Elizabeth II’s Platinum Jubilee festivities.\r\nLilibet… [+3901 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Barbara Starr",
            "title": "First on CNN: US Military investigating whether US service member carried out an insider attack on base in Syria that injured 4 Americans - CNN",
            "description": "The US military is investigating whether an American service member set off explosives in an insider attack on a small US base in northern Syria that injured four service members in April, according to three defense officials and a statement from the military.",
            "url": "https://www.cnn.com/2022/06/06/politics/us-military-investigating-syria-attack/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/130927142724-pentagon-aerial.jpg?q=x_0,y_271,h_2362,w_4199,c_crop/w_800",
            "publishedAt": "2022-06-06T20:41:00Z",
            "content": "The US military is investigating whether an American service member set off explosives in an insider attack on a small US base in northern Syria that injured four service members in April, according … [+2766 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "John Bacon, Jorge L. Ortiz and Celina Tebor, USA TODAY",
            "title": "US moves to seize $350M plane from Russian oligarch; Zelenskyy says war 'fatigue is growing' in West: Live Ukraine updates - USA TODAY",
            "description": "U.S. authorities moved to seize a $350 million private jet from Russian oligarch Roman Abramovich. Live Ukraine updates.",
            "url": "https://www.usatoday.com/story/news/politics/2022/06/06/ukraine-russia-invasion-live-updates/7526994001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/06/06/USAT/8bc790d7-ef49-4ff4-8c20-5a279822fb52-Ukraine9.jpg?auto=webp&crop=7992,4496,x0,y406&format=pjpg&width=1200",
            "publishedAt": "2022-06-06T20:37:30Z",
            "content": "U.S. authorities moved Monday to seize a $350 million Boeing jet believed to be one of the world’s most expensive private airplanes from Russian oligarch Roman Abramovich.\r\nA federal magistrate judge… [+11179 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sara Salinas",
            "title": "Peloton hires Amazon cloud exec to be new CFO in latest shakeup in top ranks - CNBC",
            "description": "The handover marks another departure from the at-home fitness company's top ranks.",
            "url": "https://www.cnbc.com/2022/06/06/pelotons-cfo-is-leaving-the-company-will-be-replaced-by-amazon-cloud-executive.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106151391-15695313332402019-09-26t144406z_1215654690_rc1d1c4afa70_rtrmadp_3_peloton-ipo.jpg?v=1642778264&w=1920&h=1080",
            "publishedAt": "2022-06-06T20:29:53Z",
            "content": "Peloton's chief financial officer, Jill Woodworth, is leaving the company and will be replaced by Liz Coddington, an executive at Amazon Web Services, effective next week, the company announced Monda… [+2084 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Phil Mickelson joins LIV Golf Invitational Series: Six-time major winner enters tournament field in London - CBS Sports",
            "description": "One of the biggest names in American golf will be taking his talents to LIV Golf, as expected",
            "url": "https://www.cbssports.com/golf/news/phil-mickelson-joins-liv-golf-invitational-series-six-time-major-winner-enters-tournament-field-in-london/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/06/06/dbbec6f0-23fb-42f6-a63c-50a43b349aa0/thumbnail/1200x675/89bff892dbc312c47e8a449ad193db62/mickelson.jpg",
            "publishedAt": "2022-06-06T20:27:00Z",
            "content": "LIV Golf released the field list last week for its first event at the Centurion Golf Club in London from June 9-11. Missing from this list were six names, as only 42 were made public for the 48-man, … [+2044 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Jill Lawless",
            "title": "British Prime Minister Johnson survives no-confidence vote - The Associated Press",
            "description": "LONDON (AP) — British Prime Minister Boris Johnson survived a no-confidence vote on Monday, securing enough support from his Conservative Party to remain in office despite a substantial rebellion that leaves him a weakened leader with an uncertain future.",
            "url": "https://apnews.com/article/boris-johnson-london-government-and-politics-d1bc8ce279ee43a8854c53c698bc0e57",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/e4ec2cce4f0140349e85f6dbb19ca31f/1479.jpeg",
            "publishedAt": "2022-06-06T20:15:00Z",
            "content": "LONDON (AP) British Prime Minister Boris Johnson survived a no-confidence vote on Monday, securing enough support from his Conservative Party to remain in office despite a substantial rebellion that … [+6389 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Etan Vlessing",
            "title": "Neve Campbell Exits ‘Scream 6’ Over Pay - Hollywood Reporter",
            "description": "Logo text Neve Campbell says she won’t be in the new Scream sequel after the she received an inadequate offer to star in the slasher franchise’s sixth installment. “Sadly, I won’t be making the next Scream film. As a woman I have had to work extremely hard in…",
            "url": "https://www.hollywoodreporter.com/movies/movie-news/neve-campbell-exits-scream-6-pay-1235159876/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/01/scrfp-012-Hx-2022.jpg?w=1024",
            "publishedAt": "2022-06-06T19:51:27Z",
            "content": "Neve Campbell says she won’t be in the new Scream sequel after the she received an inadequate offer to star in the slasher franchise’s sixth installment.\r\n“Sadly, I won’t be making the next Scream fi… [+1207 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Bradford Betz",
            "title": "Nigerian church shooting: authorities hunt for gunmen in attack that killed at least 50, including children - Fox News",
            "description": "A Catholic Church in southwestern Nigeria came under attack Sunday morning as gunmen opened fire, set off explosives, and killed at least 50 people.",
            "url": "https://www.foxnews.com/world/nigerian-church-shooting-gunmen-attack-killed-50",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/Nigeria-1.jpg",
            "publishedAt": "2022-06-06T19:48:19Z",
            "content": "Gunmen opened fire and set off explosives inside a Catholic Church in southwestern Nigeria Sunday, killing at least 50 people including children and injuring dozens more before escaping the scene, au… [+3175 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jay Peters",
            "title": "Ted Lasso season 3 might be the show's final one - The Verge",
            "description": "Ted Lasso’s upcoming third season is being written as if it’s the final one, Brett Goldstein told The Sunday Times. The show is arguably the biggest hit on Apple TV Plus.",
            "url": "https://www.theverge.com/2022/6/6/23156877/ted-lasso-season-3-last-final",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/uog3n1v_EksPByKlZdqGtiuYXoI=/0x301:5932x3407/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22735339/Ted_Lasso_Photo_020112.jpg",
            "publishedAt": "2022-06-06T19:46:45Z",
            "content": "Season 3 is being written as if its the final one\r\nIm also crossing my fingers it will the final season.\r\nPhoto: Apple\r\nTed Lassos upcoming third season is being written as if its the final one, Bret… [+1016 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Brent Schrotenboer, USA TODAY",
            "title": "Deshaun Watson sued by 24th woman in latest misconduct claim - USA TODAY",
            "description": "A 24th lawsuit has been filed in Texas against Cleveland Browns quarterback Deshaun Watson, the second lawsuit of the week.",
            "url": "https://www.usatoday.com/story/sports/2022/06/06/deshaun-watson-lawsuit-sexual-misconduct-massage-cleveland-browns-quarterback/7470996001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/06/06/USAT/c3dfe009-2789-479c-9c3e-a10ee20d9768-AP_Browns_Football.jpg?auto=webp&crop=4893,2752,x0,y0&format=pjpg&width=1200",
            "publishedAt": "2022-06-06T19:41:41Z",
            "content": "A 24th woman has sued Deshaun Watson and accused him of sexual misconduct in 2020, marking the second time in a week that a new lawsuit has been filed against the quarterback after all the others wer… [+5016 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ny.gov"
            },
            "author": null,
            "title": "Governor Hochul Signs Landmark Legislative Package to Strengthen Gun Laws and Protect New Yorkers - ny.gov",
            "description": "Governor Hochul signed a landmark legislative package to immediately strengthen the state's gun laws, close critical loopholes exposed by shooters in Buffalo and Uvalde and protect New Yorkers from the scourge of gun violence that continues to infect our nati…",
            "url": "https://www.governor.ny.gov/news/governor-hochul-signs-landmark-legislative-package-strengthen-gun-laws-and-protect-new-yorkers",
            "urlToImage": "https://www.governor.ny.gov/sites/default/files/styles/cover_image_660x400_/public/2022-06/Gun_Law_Safety_Bill_Signing_060622.jpg?h=272cb505&itok=IsIWbV1p",
            "publishedAt": "2022-06-06T19:40:30Z",
            "content": "State Senator Jamaal Bailey said, \"We cannot wait for the next Buffalo or Uvalde to act. With this package of legislation, New York is leading the country in strengthening our gun laws to meaningfull… [+28131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WSB Atlanta"
            },
            "author": "WSBTV.com News Staff",
            "title": "DPH confirms metro Atlanta man has monkeypox – WSB-TV Channel 2 - Atlanta - WSB Atlanta",
            "description": "We'll have the latest on this developing story starting on Channel 2 Action News at 4 p.m.",
            "url": "https://www.wsbtv.com/news/local/atlanta/dph-confirms-metro-atlanta-man-has-monkeypox/CQRPARJSYVFM5C5P45A2JQDEAE/",
            "urlToImage": "https://cmg-cmg-tv-10010-prod.cdn.arcpublishing.com/resizer/1hSKNDGpb9BsI6AVqVLrVPRx_Sc=/1440x810/filters:format(jpg):quality(70)/d1hfln2sfez66z.cloudfront.net/05-23-2022/t_8fbaa359b07e4fe4a8c1a19a7041454e_name_Monkeypox_What_you_need_to_know_1_628b9a9f1155d61774844c67_1_May_23_2022_14_50_49_poster.jpg",
            "publishedAt": "2022-06-06T19:37:39Z",
            "content": "ATLANTA — The Georgia Department of Public Health confirmed Monday that a suspected case of monkeypox found in a metro Atlanta man is indeed the virus.\r\nDPH said the man has a history of internationa… [+1190 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Statewide primary is Tuesday. Early voting suggests low turnout in Stanislaus County - Modesto Bee",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiTmh0dHBzOi8vd3d3Lm1vZGJlZS5jb20vbmV3cy9wb2xpdGljcy1nb3Zlcm5tZW50L2VsZWN0aW9uL2FydGljbGUyNjIyMDc0MDIuaHRtbNIBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-06-06T19:36:00Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Brandon Gillespie",
            "title": "Young San Franciscans rally for embattled DA facing recall election: ‘Fighting for the soul of San Francisco’ - Fox News",
            "description": "Joy Zhan, co-president of the San Francisco Young Democrats, made an impassioned plea for voters to reject recall efforts against the city's DA, Chesa Boudin.",
            "url": "https://www.foxnews.com/politics/young-san-franciscans-rally-embattled-da-recall-election",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/02/AP21040087139030.jpg",
            "publishedAt": "2022-06-06T19:33:31Z",
            "content": "A group of young, politically active San Franciscans are rallying behind embattled District Attorney Chesa Boudin as he faces a tough recall election on Tuesday centered on his handling of rising cri… [+4760 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Dan Sabbagh",
            "title": "Ukraine needs many more rocket launchers from west, says adviser - The Guardian",
            "description": "UK and US have so far promised a handful; official says with 60 they can stop Russians ‘dead in their tracks’",
            "url": "https://amp.theguardian.com/world/2022/jun/06/ukraine-needs-many-more-rocket-launchers-from-west-says-adviser",
            "urlToImage": null,
            "publishedAt": "2022-06-06T19:11:00Z",
            "content": "UkraineUK and US have so far promised a handful; official says with 60 they can stop Russians dead in their tracks\r\nUkraine needs 60 multiple rocket launchers many more than the handful promised so f… [+6626 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Nancy Tartaglione",
            "title": "‘Top Gun: Maverick’ Soars To $557M Global Through Sunday; ‘Jurassic World Dominion’ Grabs $56M In Early Bow & ‘Doctor Strange 2’ Crosses $900M WW – International Box Office Update - Deadline",
            "description": "MONDAY UPDATE, with actuals: Top Gun: Maverick hit even higher altitude at the global and international box office this weekend with Sunday’s actuals now included. Tom Cruise’s return as the eponymous flying ace notched a confirmed $85.8M in 64 markets this s…",
            "url": "https://deadline.com/2022/06/top-gun-maverick-tom-cruise-500-million-second-weekend-jurassic-world-dominion-doctor-strange-global-international-boxofficeinternational-box-office-1235038582/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/05/top-gun-2-1-e1653660481403.jpg?w=1024",
            "publishedAt": "2022-06-06T18:51:00Z",
            "content": "MONDAY UPDATE, with actuals: Top Gun: Maverick hit even higher altitude at the global and international box office this weekend with Sunday’s actuals now included. Tom Cruise’s return as the eponymou… [+9370 chars]"
        }
    ]
    constructor(){
        super();
        console.log("I am Constructor");
        this.state={
            articles : this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className='container my-3'>
          <h1 className='my-4'>PapaNews - Top Headlines</h1>
          <div className='row'>
          {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
          })}
              
          </div>

      </div>
    )
  }
}
