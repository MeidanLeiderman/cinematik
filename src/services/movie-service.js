'use strict'
const API_KEY = '09aea31936b202e2cabbd8bf40f0bb15'
const BASE_URL = 'https://api.themoviedb.org/3/movie'

async function getPopularMovies() {
    // let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    // const movies = await response.json()
    // return movies.results
    // console.log(movies)
    return movies
}

async function getSelectedMovie(id) {
    try {
        const responses = await Promise.all([
            getMovieDetails(id),
            getMovieCast(id),
            getSimilarMovies(id)
        ])
        const movie = {...responses[0], cast: [...responses[1].cast], crew: [...responses[1].crew], similarMovies: [...responses[2].results]}
        console.log(movie)
        return movie
    } catch (err) {
        console.log('unable to reach server', err)
    }
}

async function getMovieCast(id) {
    const response = await fetch(`${BASE_URL}/${id}/credits?api_key=${API_KEY}&language=en-US`)
    if (!response.ok) {
        throw new Error('network request failed')
    }
    return response.json()
}

async function getMovieDetails(id) {
    const response = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`)
    if (!response.ok) {
        throw new Error('network request failed')
    }
    return response.json()
}

async function getSimilarMovies(id){
    const response = await fetch(`${BASE_URL}/${id}}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    if(!response.ok){
        throw new Error('network request failed')
    }
    return response.json()
}

export default {
    getPopularMovies,
    getSelectedMovie
}


const movies = [{ "adult": false, "backdrop_path": "/srYya1ZlI97Au4jUYAktDe3avyA.jpg", "genre_ids": [14, 28, 12], "id": 464052, "original_language": "en", "original_title": "Wonder Woman 1984", "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.", "popularity": 2696.241, "poster_path": "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg", "release_date": "2020-12-16", "title": "Wonder Woman 1984", "video": false, "vote_average": 7, "vote_count": 3420 },
{ "adult": false, "backdrop_path": "/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg", "genre_ids": [53, 28, 878], "id": 775996, "original_language": "en", "original_title": "Outside the Wire", "overview": "In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.", "popularity": 1948.012, "poster_path": "/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg", "release_date": "2021-01-15", "title": "Outside the Wire", "video": false, "vote_average": 6.5, "vote_count": 625 },
{ "adult": false, "backdrop_path": "/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg", "genre_ids": [53, 80], "id": 602269, "original_language": "en", "original_title": "The Little Things", "overview": "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.", "popularity": 2730.281, "poster_path": "/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg", "release_date": "2021-01-27", "title": "The Little Things", "video": false, "vote_average": 6.4, "vote_count": 228 }, { "adult": false, "backdrop_path": "/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg", "genre_ids": [878, 28], "id": 560144, "original_language": "en", "original_title": "Skylines", "overview": "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.", "popularity": 1370.914, "poster_path": "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg", "release_date": "2020-10-25", "title": "Skylines", "video": false, "vote_average": 5.7, "vote_count": 155 }, { "adult": false, "backdrop_path": "/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg", "genre_ids": [878, 28], "id": 651571, "original_language": "en", "original_title": "Breach", "overview": "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.", "popularity": 1492.023, "poster_path": "/13B6onhL6FzSN2KaNeQeMML05pS.jpg", "release_date": "2020-12-17", "title": "Breach", "video": false, "vote_average": 4.7, "vote_count": 215 }, { "adult": false, "backdrop_path": "/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg", "genre_ids": [10751, 16, 35, 18, 10402, 14], "id": 508442, "original_language": "en", "original_title": "Soul", "overview": "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.", "popularity": 1338.739, "poster_path": "/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg", "release_date": "2020-12-25", "title": "Soul", "video": false, "vote_average": 8.3, "vote_count": 4607 }, { "adult": false, "backdrop_path": "/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg", "genre_ids": [28, 12, 80], "id": 604822, "original_language": "zh", "original_title": "急先锋", "overview": "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization.", "popularity": 1570.167, "poster_path": "/vYvppZMvXYheYTWVd8Rnn9nsmNp.jpg", "release_date": "2020-09-30", "title": "Vanguard", "video": false, "vote_average": 6.7, "vote_count": 175 }, { "adult": false, "backdrop_path": "/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg", "genre_ids": [28, 12, 53], "id": 581387, "original_language": "ko", "original_title": "백두산", "overview": "Stagnant since 1903, at an elevation of 9000', a volcano erupts on the mythical and majestic Baekdu Mountain.", "popularity": 1049.778, "poster_path": "/zoeKREZ2IdAUnXISYCS0E6H5BVh.jpg", "release_date": "2019-12-19", "title": "Ashfall", "video": false, "vote_average": 6.8, "vote_count": 178 }, { "adult": false, "backdrop_path": "/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg", "genre_ids": [28, 80, 53], "id": 587996, "original_language": "es", "original_title": "Bajocero", "overview": "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.", "popularity": 1754.238, "poster_path": "/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg", "release_date": "2021-01-29", "title": "Below Zero", "video": false, "vote_average": 6.5, "vote_count": 224 }, { "adult": false, "backdrop_path": "/2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg", "genre_ids": [53, 28, 80, 18], "id": 553604, "original_language": "en", "original_title": "Honest Thief", "overview": "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.", "popularity": 947.71, "poster_path": "/zeD4PabP6099gpE0STWJrJrCBCs.jpg", "release_date": "2020-09-03", "title": "Honest Thief", "video": false, "vote_average": 6.6, "vote_count": 565 }, { "adult": false, "backdrop_path": "/54yOImQgj8i85u9hxxnaIQBRUuo.jpg", "genre_ids": [28, 80, 18, 53], "id": 539885, "original_language": "en", "original_title": "Ava", "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.", "popularity": 966.991, "poster_path": "/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg", "release_date": "2020-07-02", "title": "Ava", "video": false, "vote_average": 5.6, "vote_count": 1217 }, { "adult": false, "backdrop_path": "/yImmxRokQ48PD49ughXdpKTAsAU.jpg", "genre_ids": [28, 12, 35, 10751], "id": 644092, "original_language": "en", "original_title": "Finding 'Ohana", "overview": "Two Brooklyn siblings' summer in a rural Oahu town takes an exciting turn when a journal pointing to long-lost treasure sets them on an adventure, leading them to reconnect with their Hawaiian heritage.", "popularity": 979.179, "poster_path": "/tTWl37oAYRXS3D5mEHmjveXXyrN.jpg", "release_date": "2021-01-29", "title": "Finding 'Ohana", "video": false, "vote_average": 6.7, "vote_count": 90 }, { "adult": false, "backdrop_path": "/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg", "genre_ids": [28, 80], "id": 495764, "original_language": "en", "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)", "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.", "popularity": 882.268, "poster_path": "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg", "release_date": "2020-02-05", "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)", "video": false, "vote_average": 7.1, "vote_count": 6848 }, { "adult": false, "backdrop_path": "/jb6Ju38HmKX0bYHCmAxs8HyNeJ2.jpg", "genre_ids": [878, 28], "id": 373571, "original_language": "en", "original_title": "Godzilla: King of the Monsters", "overview": "Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species, thought to be mere myths, rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.", "popularity": 892.495, "poster_path": "/mzOHg7Q5q9yUmY0b9Esu8Qe6Nnm.jpg", "release_date": "2019-05-29", "title": "Godzilla: King of the Monsters", "video": false, "vote_average": 6.6, "vote_count": 3550 }, { "adult": false, "backdrop_path": "/7TxeZVg2evMG42p0uSbMJpWNQ8A.jpg", "genre_ids": [10751, 16, 14], "id": 520946, "original_language": "en", "original_title": "100% Wolf", "overview": "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.", "popularity": 868.737, "poster_path": "/2VrvxK4yxNCU6KVgo5TADJeBEQu.jpg", "release_date": "2020-06-26", "title": "100% Wolf", "video": false, "vote_average": 6.1, "vote_count": 65 }, { "adult": false, "backdrop_path": "/9pHxv7TX0jOKNgnGMDP6RJ2m1GL.jpg", "genre_ids": [28, 53], "id": 737568, "original_language": "en", "original_title": "The Doorman", "overview": "A former Marine turned doorman at a luxury New York City high-rise must outsmart and battle a group of art thieves and their ruthless leader — while struggling to protect her sister's family. As the thieves become increasingly desperate and violent, the doorman calls upon her deadly fighting skills to end the showdown.", "popularity": 803.431, "poster_path": "/pklyUbh4k1DbHdnsOMASyw7C6NH.jpg", "release_date": "2020-10-01", "title": "The Doorman", "video": false, "vote_average": 5.8, "vote_count": 149 }, { "adult": false, "backdrop_path": "/mGJuQwMq1bEboaVTqQAK4p4zQvC.jpg", "genre_ids": [28, 878], "id": 399566, "original_language": "en", "original_title": "Godzilla vs. Kong", "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.", "popularity": 818.193, "poster_path": "/3Iso4hatk3N0RTkQFAk7YFO4GGy.jpg", "release_date": "2021-03-25", "title": "Godzilla vs. Kong", "video": false, "vote_average": 0, "vote_count": 0 }, { "adult": false, "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg", "genre_ids": [28, 53, 878], "id": 577922, "original_language": "en", "original_title": "Tenet", "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.", "popularity": 794.002, "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg", "release_date": "2020-08-22", "title": "Tenet", "video": false, "vote_average": 7.3, "vote_count": 4290 }, { "adult": false, "backdrop_path": "/zogWnCSztU8xvabaepQnAwsOtOt.jpg", "genre_ids": [28, 80, 18], "id": 531499, "original_language": "en", "original_title": "The Tax Collector", "overview": "David Cuevas is a family man who works as a gangland tax collector for high ranking Los Angeles gang members. He makes collections across the city with his partner Creeper making sure people pay up or will see retaliation. An old threat returns to Los Angeles that puts everything David loves in harm’s way.", "popularity": 780.048, "poster_path": "/3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg", "release_date": "2020-08-07", "title": "The Tax Collector", "video": false, "vote_average": 5.8, "vote_count": 245 }, { "adult": false, "backdrop_path": "/9xeEGUZjgiKlI69jwIOi0hjKUIk.jpg", "genre_ids": [14, 28, 12, 16], "id": 664767, "original_language": "en", "original_title": "Mortal Kombat Legends: Scorpion's Revenge", "overview": "After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.", "popularity": 727.034, "poster_path": "/4VlXER3FImHeFuUjBShFamhIp9M.jpg", "release_date": "2020-04-12", "title": "Mortal Kombat Legends: Scorpion's Revenge", "video": false, "vote_average": 8.4, "vote_count": 737 }]