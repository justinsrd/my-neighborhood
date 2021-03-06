var _ = require('lodash');

var seattleNeighborhoods = 'admiral, alki, arborHeights, atlantic, ballard, beaconHill, belltown, bitterLake, blueRidge, brighton, broadmoor, broadview, bryant, capitolHill, cedarPark, centralDistrict, columbiaCity, crownHill, dennyBlaine, downtown, eastlake, fauntleroy, firstHill, fremont, georgetown, greenLake, greenwood, hallerLake, hawthorneHills, highPoint, highlandPark, industrialDistrict, interbay, internationalDistrict, laurelhurst, leschi, lowerQueenAnne, loyalHights, madisonPark, madisonValley, madrona, magnolia, mapleLeaf, matthewsBeach, meadowbrook, montlake, mountBaker, northBeach, northCollegePark, northDelridge, northgate, olympicHills, olympicMannor, phinneyRidge, pinehurst, pioneerSquare, portageBay, queenAnne, rainierBeach, ravenna, riverview, roosevelt, roxhill, sewardPark, southDelridge, southLakeUnion, southPark, sunsetHill, universityDistrict, victoryHeights, viewRidge, wallingford, wedgwood, westSeattle, westlake, whittierHeights, windermere'

var mapResult = seattleNeighborhoods.split(', ')
mapResult.sort();
var mapResult = mapResult.map(function(i){return i.toLowerCase()});

//console.log(mapResult);
//console.log(mapResult.length); // 78

var zillows =[ { id: [ '250206' ],
										name: [ 'Capitol Hill' ],
										zindex: [ { _: '415600', '$': { currency: 'USD' } } ],
										url: [ 'http://www.zillow.com/local-info/WA-Seattle/Capitol-Hill/r_250206/' ],
										latitude: [ '47.62622' ],
										longitude: [ '-122.315979' ] },
									{ id: [ '272001' ],
									 name: [ 'University District' ],
									 zindex: [ { _: '514200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/University-District/r_272001/' ],
									 latitude: [ '47.660897' ],
									 longitude: [ '-122.305045' ] },
									{ id: [ '271990' ],
									 name: [ 'Magnolia' ],
									 zindex: [ { _: '662000', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Magnolia/r_271990/' ],
									 latitude: [ '47.650943' ],
									 longitude: [ '-122.409136' ] },
									{ id: [ '250788' ],
									 name: [ 'Greenwood' ],
									 zindex: [ { _: '421400', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Greenwood/r_250788/' ],
									 latitude: [ '47.694211' ],
									 longitude: [ '-122.355281' ] },
									{ id: [ '252248' ],
									 name: [ 'Wallingford' ],
									 zindex: [ { _: '608500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Wallingford/r_252248/' ],
									 latitude: [ '47.658763' ],
									 longitude: [ '-122.334464' ] },
									{ id: [ '250050' ],
									 name: [ 'Beacon Hill' ],
									 zindex: [ { _: '361900', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Beacon-Hill/r_250050/' ],
									 latitude: [ '47.556114' ],
									 longitude: [ '-122.302828' ] },
									{ id: [ '250692' ],
									 name: [ 'Fremont' ],
									 zindex: [ { _: '505400', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Fremont/r_250692/' ],
									 latitude: [ '47.656187' ],
									 longitude: [ '-122.352184' ] },
									{ id: [ '251709' ],
									 name: [ 'Ravenna' ],
									 zindex: [ { _: '573300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Ravenna/r_251709/' ],
									 latitude: [ '47.675777' ],
									 longitude: [ '-122.301115' ] },
									{ id: [ '271932' ],
									 name: [ 'North Beacon Hill' ],
									 zindex: [ { _: '400900', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/North-Beacon-Hill/r_271932/' ],
									 latitude: [ '47.578054' ],
									 longitude: [ '-122.308873' ] },
									{ id: [ '271869' ],
									 name: [ 'First Hill' ],
									 zindex: [ { _: '296000', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/First-Hill/r_271869/' ],
									 latitude: [ '47.60819' ],
									 longitude: [ '-122.323829' ] },
									{ id: [ '344019' ],
									 name: [ 'Admiral' ],
									 zindex: [ { _: '530100', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Admiral/r_344019/' ],
									 latitude: [ '47.581725' ],
									 longitude: [ '-122.387362' ] },
									{ id: [ '344000' ],
									 name: [ 'Maple Leaf' ],
									 zindex: [ { _: '468500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Maple-Leaf/r_344000/' ],
									 latitude: [ '47.695035' ],
									 longitude: [ '-122.316628' ] },
									{ id: [ '271942' ],
									 name: [ 'North Queen Anne' ],
									 zindex: [ { _: '658000', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/North-Queen-Anne/r_271942/' ],
									 latitude: [ '47.649291' ],
									 longitude: [ '-122.36301' ] },
									{ id: [ '271808' ],
									 name: [ 'Belltown' ],
									 zindex: [ { _: '376700', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Belltown/r_271808/' ],
									 latitude: [ '47.614592' ],
									 longitude: [ '-122.348464' ] },
									{ id: [ '271961' ],
									 name: [ 'Phinney Ridge' ],
									 zindex: [ { _: '586600', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Phinney-Ridge/r_271961/' ],
									 latitude: [ '47.672704' ],
									 longitude: [ '-122.355277' ] },
									{ id: [ '250780' ],
									 name: [ 'Green Lake' ],
									 zindex: [ { _: '573500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Green-Lake/r_250780/' ],
									 latitude: [ '47.679959' ],
									 longitude: [ '-122.333709' ] },
									{ id: [ '250801' ],
									 name: [ 'Haller Lake' ],
									 zindex: [ { _: '368700', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Haller-Lake/r_250801/' ],
									 latitude: [ '47.719604' ],
									 longitude: [ '-122.334753' ] },
									{ id: [ '271819' ],
									 name: [ 'Broadview' ],
									 zindex: [ { _: '518100', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Broadview/r_271819/' ],
									 latitude: [ '47.719649' ],
									 longitude: [ '-122.368414' ] },
									{ id: [ '271814' ],
									 name: [ 'Bitter Lake' ],
									 zindex: [ { _: '363500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Bitter-Lake/r_271814/' ],
									 latitude: [ '47.719625' ],
									 longitude: [ '-122.35012' ] },
									{ id: [ '271957' ],
									 name: [ 'Olympic Hills' ],
									 zindex: [ { _: '365200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Olympic-Hills/r_271957/' ],
									 latitude: [ '47.726604' ],
									 longitude: [ '-122.302454' ] },
									{ id: [ '344001' ],
									 name: [ 'Wedgwood' ],
									 zindex: [ { _: '523700', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Wedgwood/r_344001/' ],
									 latitude: [ '47.690136' ],
									 longitude: [ '-122.293779' ] },
									{ id: [ '251170' ],
									 name: [ 'Loyal Heights' ],
									 zindex: [ { _: '522500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Loyal-Heights/r_251170/' ],
									 latitude: [ '47.683235' ],
									 longitude: [ '-122.384852' ] },
									{ id: [ '271921' ],
									 name: [ 'Minor' ],
									 zindex: [ { _: '450500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Minor/r_271921/' ],
									 latitude: [ '47.606068' ],
									 longitude: [ '-122.309628' ] },
									{ id: [ '344008' ],
									 name: [ 'West Woodland' ],
									 zindex: [ { _: '485800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/West-Woodland/r_344008/' ],
									 latitude: [ '47.666069' ],
									 longitude: [ '-122.368621' ] },
									{ id: [ '250017' ],
									 name: [ 'Ballard' ],
									 zindex: [ { _: '397200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Ballard/r_250017/' ],
									 latitude: [ '47.668328' ],
									 longitude: [ '-122.384536' ] },
									{ id: [ '271839' ],
									 name: [ 'Columbia City' ],
									 zindex: [ { _: '379000', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Columbia-City/r_271839/' ],
									 latitude: [ '47.5648' ],
									 longitude: [ '-122.286003' ] },
									{ id: [ '343997' ],
									 name: [ 'Alki' ],
									 zindex: [ { _: '568600', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Alki/r_343997/' ],
									 latitude: [ '47.576466' ],
									 longitude: [ '-122.398842' ] },
									{ id: [ '250146' ],
									 name: [ 'Brighton' ],
									 zindex: [ { _: '324700', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Brighton/r_250146/' ],
									 latitude: [ '47.538786' ],
									 longitude: [ '-122.275961' ] },
									{ id: [ '271849' ],
									 name: [ 'Downtown' ],
									 zindex: [ { _: '563000', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Downtown/r_271849/' ],
									 latitude: [ '47.607346' ],
									 longitude: [ '-122.335089' ] },
									{ id: [ '271856' ],
									 name: [ 'East Queen Anne' ],
									 zindex: [ { _: '667300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/East-Queen-Anne/r_271856/' ],
									 latitude: [ '47.637701' ],
									 longitude: [ '-122.350191' ] },
									{ id: [ '343999' ],
									 name: [ 'North College Park' ],
									 zindex: [ { _: '388200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/North-College-Park/r_343999/' ],
									 latitude: [ '47.699483' ],
									 longitude: [ '-122.336865' ] },
									{ id: [ '344033' ],
									 name: [ 'High Point' ],
									 zindex: [ { _: '322800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/High-Point/r_344033/' ],
									 latitude: [ '47.543744' ],
									 longitude: [ '-122.368502' ] },
									{ id: [ '251704' ],
									 name: [ 'Rainier Beach' ],
									 zindex: [ { _: '296000', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Rainier-Beach/r_251704/' ],
									 latitude: [ '47.511649' ],
									 longitude: [ '-122.257974' ] },
									{ id: [ '344029' ],
									 name: [ 'Highland Park' ],
									 zindex: [ { _: '287200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Highland-Park/r_344029/' ],
									 latitude: [ '47.527126' ],
									 longitude: [ '-122.341404' ] },
									{ id: [ '252056' ],
									 name: [ 'Sunset Hill' ],
									 zindex: [ { _: '612800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Sunset-Hill/r_252056/' ],
									 latitude: [ '47.677581' ],
									 longitude: [ '-122.401052' ] },
									{ id: [ '271913' ],
									 name: [ 'Matthews Beach' ],
									 zindex: [ { _: '556700', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Matthews-Beach/r_271913/' ],
									 latitude: [ '47.703815' ],
									 longitude: [ '-122.279031' ] },
									{ id: [ '344022' ],
									 name: [ 'Gatewood' ],
									 zindex: [ { _: '446800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Gatewood/r_344022/' ],
									 latitude: [ '47.537448' ],
									 longitude: [ '-122.387363' ] },
									{ id: [ '250478' ],
									 name: [ 'Dunlap' ],
									 zindex: [ { _: '277100', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Dunlap/r_250478/' ],
									 latitude: [ '47.525357' ],
									 longitude: [ '-122.270274' ] },
									{ id: [ '344020' ],
									 name: [ 'Junction' ],
									 zindex: [ { _: '458300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Junction/r_344020/' ],
									 latitude: [ '47.564801' ],
									 longitude: [ '-122.38521' ] },
									{ id: [ '272018' ],
									 name: [ 'West Queen Anne' ],
									 zindex: [ { _: '703100', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/West-Queen-Anne/r_272018/' ],
									 latitude: [ '47.633342' ],
									 longitude: [ '-122.366405' ] },
									{ id: [ '344031' ],
									 name: [ 'South Delridge' ],
									 zindex: [ { _: '268000', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/South-Delridge/r_344031/' ],
									 latitude: [ '47.52674' ],
									 longitude: [ '-122.361155' ] },
									{ id: [ '271857' ],
									 name: [ 'Eastlake' ],
									 zindex: [ { _: '428400', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Eastlake/r_271857/' ],
									 latitude: [ '47.638485' ],
									 longitude: [ '-122.329227' ] },
									{ id: [ '344024' ],
									 name: [ 'Arbor Heights' ],
									 zindex: [ { _: '385500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Arbor-Heights/r_344024/' ],
									 latitude: [ '47.506979' ],
									 longitude: [ '-122.381278' ] },
									{ id: [ '271831' ],
									 name: [ 'Cedar Park' ],
									 zindex: [ { _: '432200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Cedar-Park/r_271831/' ],
									 latitude: [ '47.724628' ],
									 longitude: [ '-122.287479' ] },
									{ id: [ '344023' ],
									 name: [ 'Fauntleroy' ],
									 zindex: [ { _: '535900', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Fauntleroy/r_344023/' ],
									 latitude: [ '47.522217' ],
									 longitude: [ '-122.389197' ] },
									{ id: [ '343993' ],
									 name: [ 'Pinehurst' ],
									 zindex: [ { _: '365100', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Pinehurst/r_343993/' ],
									 latitude: [ '47.723129' ],
									 longitude: [ '-122.320343' ] },
									{ id: [ '271906' ],
									 name: [ 'Lower Queen Anne' ],
									 zindex: [ { _: '449200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Lower-Queen-Anne/r_271906/' ],
									 latitude: [ '47.628861' ],
									 longitude: [ '-122.354041' ] },
									{ id: [ '272005' ],
									 name: [ 'Victory Heights' ],
									 zindex: [ { _: '422200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Victory-Heights/r_272005/' ],
									 latitude: [ '47.709842' ],
									 longitude: [ '-122.303948' ] },
									{ id: [ '271901' ],
									 name: [ 'Leschi' ],
									 zindex: [ { _: '624600', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Leschi/r_271901/' ],
									 latitude: [ '47.599748' ],
									 longitude: [ '-122.290462' ] },
									{ id: [ '251100' ],
									 name: [ 'Laurelhurst' ],
									 zindex: [ { _: '1070400', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Laurelhurst/r_251100/' ],
									 latitude: [ '47.658207' ],
									 longitude: [ '-122.278598' ] },
									{ id: [ '344030' ],
									 name: [ 'Roxhill' ],
									 zindex: [ { _: '324300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Roxhill/r_344030/' ],
									 latitude: [ '47.527392' ],
									 longitude: [ '-122.370661' ] },
									{ id: [ '343994' ],
									 name: [ 'South Beacon Hill' ],
									 zindex: [ { _: '319100', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/South-Beacon-Hill/r_343994/' ],
									 latitude: [ '47.524379' ],
									 longitude: [ '-122.289554' ] },
									{ id: [ '344021' ],
									 name: [ 'Fairmount Park' ],
									 zindex: [ { _: '424900', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Fairmount-Park/r_344021/' ],
									 latitude: [ '47.555062' ],
									 longitude: [ '-122.379868' ] },
									{ id: [ '252336' ],
									 name: [ 'Whittier Heights' ],
									 zindex: [ { _: '524800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Whittier-Heights/r_252336/' ],
									 latitude: [ '47.683314' ],
									 longitude: [ '-122.371424' ] },
									{ id: [ '250150' ],
									 name: [ 'Broadway' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Broadway/r_250150/' ],
									 latitude: [ '47.62622' ],
									 longitude: [ '-122.321452' ] },
									{ id: [ '344003' ],
									 name: [ 'Bryant' ],
									 zindex: [ { _: '569300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Bryant/r_344003/' ],
									 latitude: [ '47.672037' ],
									 longitude: [ '-122.286168' ] },
									{ id: [ '344002' ],
									 name: [ 'Roosevelt' ],
									 zindex: [ { _: '532800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Roosevelt/r_344002/' ],
									 latitude: [ '47.680657' ],
									 longitude: [ '-122.313832' ] },
									{ id: [ '272022' ],
									 name: [ 'Westlake' ],
									 zindex: [ { _: '406900', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Westlake/r_272022/' ],
									 latitude: [ '47.634921' ],
									 longitude: [ '-122.34161' ] },
									{ id: [ '56654' ],
									 name: [ 'Seaview' ],
									 zindex: [ { _: '470700', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Seaview/r_56654/' ],
									 latitude: [ '47.550757' ],
									 longitude: [ '-122.395767' ] },
									{ id: [ '250939' ],
									 name: [ 'Interbay' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Interbay/r_250939/' ],
									 latitude: [ '47.64247' ],
									 longitude: [ '-122.379722' ] },
									{ id: [ '344010' ],
									 name: [ 'Uptown' ],
									 zindex: [ { _: '314200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Uptown/r_344010/' ],
									 latitude: [ '47.622282' ],
									 longitude: [ '-122.354226' ] },
									{ id: [ '251186' ],
									 name: [ 'Madison Park' ],
									 zindex: [ { _: '988600', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Madison-Park/r_251186/' ],
									 latitude: [ '47.632468' ],
									 longitude: [ '-122.284761' ] },
									{ id: [ '343996' ],
									 name: [ 'View Ridge' ],
									 zindex: [ { _: '656000', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/View-Ridge/r_343996/' ],
									 latitude: [ '47.683937' ],
									 longitude: [ '-122.27431' ] },
									{ id: [ '344028' ],
									 name: [ 'Mt. Baker' ],
									 zindex: [ { _: '665200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Mt.-Baker/r_344028/' ],
									 latitude: [ '47.581626' ],
									 longitude: [ '-122.289299' ] },
									{ id: [ '250889' ],
									 name: [ 'Holly Park' ],
									 zindex: [ { _: '305500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Holly-Park/r_250889/' ],
									 latitude: [ '47.53795' ],
									 longitude: [ '-122.288786' ] },
									{ id: [ '344013' ],
									 name: [ 'Central' ],
									 zindex: [ { _: '477500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Central/r_344013/' ],
									 latitude: [ '47.615917' ],
									 longitude: [ '-122.306364' ] },
									{ id: [ '344012' ],
									 name: [ 'Madison Valley' ],
									 zindex: [ { _: '571800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Madison-Valley/r_344012/' ],
									 latitude: [ '47.626805' ],
									 longitude: [ '-122.294018' ] },
									{ id: [ '251187' ],
									 name: [ 'Madrona' ],
									 zindex: [ { _: '695800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Madrona/r_251187/' ],
									 latitude: [ '47.61269' ],
									 longitude: [ '-122.288998' ] },
									{ id: [ '251971' ],
									 name: [ 'South Park' ],
									 zindex: [ { _: '253300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/South-Park/r_251971/' ],
									 latitude: [ '47.52986' ],
									 longitude: [ '-122.321972' ] },
									{ id: [ '344032' ],
									 name: [ 'North Delridge' ],
									 zindex: [ { _: '325500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/North-Delridge/r_344032/' ],
									 latitude: [ '47.562584' ],
									 longitude: [ '-122.363922' ] },
									{ id: [ '271915' ],
									 name: [ 'Meadowbrook' ],
									 zindex: [ { _: '439700', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Meadowbrook/r_271915/' ],
									 latitude: [ '47.7065' ],
									 longitude: [ '-122.298032' ] },
									{ id: [ '344025' ],
									 name: [ 'Hillman City' ],
									 zindex: [ { _: '344500', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Hillman-City/r_344025/' ],
									 latitude: [ '47.549944' ],
									 longitude: [ '-122.281019' ] },
									{ id: [ '344027' ],
									 name: [ 'Rainier View' ],
									 zindex: [ { _: '243200', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Rainier-View/r_344027/' ],
									 latitude: [ '47.500983' ],
									 longitude: [ '-122.256076' ] },
									{ id: [ '344034' ],
									 name: [ 'Riverview' ],
									 zindex: [ { _: '325300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Riverview/r_344034/' ],
									 latitude: [ '47.546367' ],
									 longitude: [ '-122.35274' ] },
									{ id: [ '271977' ],
									 name: [ 'Seward Park' ],
									 zindex: [ { _: '590400', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Seward-Park/r_271977/' ],
									 latitude: [ '47.547011' ],
									 longitude: [ '-122.259808' ] },
									{ id: [ '271923' ],
									 name: [ 'Montlake' ],
									 zindex: [ { _: '829800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Montlake/r_271923/' ],
									 latitude: [ '47.64087' ],
									 longitude: [ '-122.308456' ] },
									{ id: [ '343998' ],
									 name: [ 'Northgate' ],
									 zindex: [ { _: '234300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Northgate/r_343998/' ],
									 latitude: [ '47.707712' ],
									 longitude: [ '-122.321105' ] },
									{ id: [ '344015' ],
									 name: [ 'Judkins Park' ],
									 zindex: [ { _: '388900', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Judkins-Park/r_344015/' ],
									 latitude: [ '47.596023' ],
									 longitude: [ '-122.301549' ] },
									{ id: [ '344026' ],
									 name: [ 'Genesee' ],
									 zindex: [ { _: '473000', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Genesee/r_344026/' ],
									 latitude: [ '47.568959' ],
									 longitude: [ '-122.282714' ] },
									{ id: [ '271893' ],
									 name: [ 'International District' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/International-District/r_271893/' ],
									 latitude: [ '47.596945' ],
									 longitude: [ '-122.324714' ] },
									{ id: [ '271900' ],
									 name: [ 'Lawton Park' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Lawton-Park/r_271900/' ],
									 latitude: [ '47.659379' ],
									 longitude: [ '-122.409136' ] },
									{ id: [ '251076' ],
									 name: [ 'Lakewood' ],
									 zindex: [ { _: '493700', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Lakewood/r_251076/' ],
									 latitude: [ '47.559577' ],
									 longitude: [ '-122.266503' ] },
									{ id: [ '250383' ],
									 name: [ 'Crown Hill' ],
									 zindex: [ { _: '422100', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Crown-Hill/r_250383/' ],
									 latitude: [ '47.696053' ],
									 longitude: [ '-122.371382' ] },
									{ id: [ '343995' ],
									 name: [ 'Denny Triangle' ],
									 zindex: [ { _: '474400', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Denny-Triangle/r_343995/' ],
									 latitude: [ '47.615618' ],
									 longitude: [ '-122.337897' ] },
									{ id: [ '344009' ],
									 name: [ 'North Beach' ],
									 zindex: [ { _: '635800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/North-Beach/r_344009/' ],
									 latitude: [ '47.696701' ],
									 longitude: [ '-122.397188' ] },
									{ id: [ '272026' ],
									 name: [ 'Windermere' ],
									 zindex: [ { _: '967300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Windermere/r_272026/' ],
									 latitude: [ '47.670199' ],
									 longitude: [ '-122.262975' ] },
									{ id: [ '271892' ],
									 name: [ 'Industrial District' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Industrial-District/r_271892/' ],
									 latitude: [ '47.566395' ],
									 longitude: [ '-122.347363' ] },
									{ id: [ '271987' ],
									 name: [ 'South Lake Union' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/South-Lake-Union/r_271987/' ],
									 latitude: [ '47.622162' ],
									 longitude: [ '-122.34237' ] },
									{ id: [ '344005' ],
									 name: [ 'Olympic Manor' ],
									 zindex: [ { _: '667800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Olympic-Manor/r_344005/' ],
									 latitude: [ '47.696054' ],
									 longitude: [ '-122.382179' ] },
									{ id: [ '271815' ],
									 name: [ 'Briarcliff' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Briarcliff/r_271815/' ],
									 latitude: [ '47.642578' ],
									 longitude: [ '-122.408081' ] },
									{ id: [ '344014' ],
									 name: [ 'Garfield' ],
									 zindex: [ { _: '468300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Garfield/r_344014/' ],
									 latitude: [ '47.607285' ],
									 longitude: [ '-122.299503' ] },
									{ id: [ '250714' ],
									 name: [ 'Georgetown' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Georgetown/r_250714/' ],
									 latitude: [ '47.540345' ],
									 longitude: [ '-122.316845' ] },
									{ id: [ '344006' ],
									 name: [ 'Blue Ridge' ],
									 zindex: [ { _: '644100', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Blue-Ridge/r_344006/' ],
									 latitude: [ '47.705359' ],
									 longitude: [ '-122.377348' ] },
									{ id: [ '271827' ],
									 name: [ 'Cascade' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Cascade/r_271827/' ],
									 latitude: [ '47.622202' ],
									 longitude: [ '-122.33138' ] },
									{ id: [ '271964' ],
									 name: [ 'Portage Bay' ],
									 zindex: [ { _: '778300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Portage-Bay/r_271964/' ],
									 latitude: [ '47.647441' ],
									 longitude: [ '-122.318551' ] },
									{ id: [ '344018' ],
									 name: [ 'Waterfront' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Waterfront/r_344018/' ],
									 latitude: [ '47.605507' ],
									 longitude: [ '-122.34804' ] },
									{ id: [ '344004' ],
									 name: [ 'Hawthorne Hills' ],
									 zindex: [ { _: '704300', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Hawthorne-Hills/r_344004/' ],
									 latitude: [ '47.671893' ],
									 longitude: [ '-122.271548' ] },
									{ id: [ '250149' ],
									 name: [ 'Broadmoor' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Broadmoor/r_250149/' ],
									 latitude: [ '47.637395' ],
									 longitude: [ '-122.290642' ] },
									{ id: [ '252396' ],
									 name: [ 'Yesler Terrace' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Yesler-Terrace/r_252396/' ],
									 latitude: [ '47.602124' ],
									 longitude: [ '-122.320733' ] },
									{ id: [ '271975' ],
									 name: [ 'Sand Point' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Sand-Point/r_271975/' ],
									 latitude: [ '47.681855' ],
									 longitude: [ '-122.25644' ] },
									{ id: [ '344017' ],
									 name: [ 'Little Saigon' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Little-Saigon/r_344017/' ],
									 latitude: [ '47.595204' ],
									 longitude: [ '-122.314853' ] },
									{ id: [ '344007' ],
									 name: [ 'Woodland' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Woodland/r_344007/' ],
									 latitude: [ '47.670466' ],
									 longitude: [ '-122.347197' ] },
									{ id: [ '271804' ],
									 name: [ 'Atlantic' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Atlantic/r_271804/' ],
									 latitude: [ '47.583337' ],
									 longitude: [ '-122.301715' ] },
									{ id: [ '271963' ],
									 name: [ 'Pioneer Square' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Pioneer-Square/r_271963/' ],
									 latitude: [ '47.597829' ],
									 longitude: [ '-122.332927' ] },
									{ id: [ '344011' ],
									 name: [ 'Denny - Blaine' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Denny----Blaine/r_344011/' ],
									 latitude: [ '47.617122' ],
									 longitude: [ '-122.284957' ] },
									{ id: [ '344016' ],
									 name: [ 'Jackson Place' ],
									 zindex: [ { _: '375800', '$': { currency: 'USD' } } ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Jackson-Place/r_344016/' ],
									 latitude: [ '47.594793' ],
									 longitude: [ '-122.3102' ] },
									{ id: [ '271886' ],
									 name: [ 'Harbor Island' ],
									 url: [ 'http://www.zillow.com/local-info/WA-Seattle/Harbor-Island/r_271886/' ],
									 latitude: [ '47.579899' ],
									 longitude: [ '-122.352042' ]}];
var zillowsResult = {};
zillows.forEach(function(neighbor) {
	var zindex = neighbor.zindex ? neighbor.zindex[0]._ : null ;
	var curr = {name: neighbor.name[0], median:zindex};
	var transformedName = curr.name.split(' ').join('').toLowerCase();
//	var curr = neighbor.name[0].split(' ').join('').toLowerCase();
	zillowsResult[transformedName] = curr;
})
//zillowsResult.sort();
//console.log(zillowsResult);
console.log(JSON.stringify(zillowsResult));


module.exports = zillowsResult;
//console.log(zillowsResult.length);

var dif = _.difference(mapResult, zillowsResult);
//console.log(dif);
//console.log(dif.length);

