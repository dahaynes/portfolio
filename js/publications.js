function loadMetaData(jsonArray) {
    console.log("work");

    $.each(jsonArray, function (arrayKey, arrayItem) {
        /* console.log(arrayItem.highlights) */
        var theHighlights = ''
        $.each(arrayItem.highlights, function (c, highlight) {
            /* console.log(c, highlight) */
            theHighlights = theHighlights + `<div class="highlightText highlight${c} invisible">${highlight}</div>`
            /* console.log(theHighlights) */
        });
        var highlighlist = theHighlights;
        /* console.log(highlighlist) */


        /* This is a template string a mixture of JS and HTML */
        var articleCard = `<div class="articleCard">
                            <div class="articleTitle">${arrayItem.title} </div> 
                            <div class="author">${arrayItem.author}</div> <div class="articleYear">${arrayItem.year} </div><div class="articleJournal">${arrayItem.journal} </div> 
                            <div class="doi"><a href="https://doi.org/${arrayItem.doi}">Get the article</a></div>
                            <div class="abstract">See the abstract</div>
                            <div class="articleHighlights">See Article Highlights</div>
                            ${highlighlist}
                            <div class="citation"><a href="${arrayItem.cite}">Get BibText</a></div>
                            <div class="articleDescription invisible">${arrayItem.abstract}</div>
                            </div>`
        $("#outputDiv").append(articleCard)
        /* console.log(jsonArray[arrayItem].year) */
        /* console.log(arrayItem.year) */
        /* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
    });


};




$(document).ready(function () {

    console.log("dropdown");
    loadMetaData(metadata);

    $(".abstract").on("click", function () {
        //console.log("I was clicked")
        if ($(this).siblings(".articleDescription").hasClass("invisible")) {
            //hide the other class
            $(this).siblings(".highlightText").addClass("invisible");

            $(this).siblings(".articleDescription").removeClass("invisible");
/*             $(this).parent(".articleCard").css('grid-template-columns', 'repeat(6,1fr);');
            $(this).parent(".articleCard").css('grid-template-rows', 'repeat(5,1fr)');  */
            $(this).parent(".articleCard").css('grid-template-areas',
                '"articleTitle articleTitle articleTitle articleTitle articleTitle articleTitle" "author author author author . articleYear" "articleJournal articleJournal articleJournal articleJournal articleJournal ." "doi cite . . abstract highlights" "articleDescription articleDescription articleDescription articleDescription articleDescription articleDescription"');

        } else {
            $(this).siblings(".articleDescription").addClass("invisible");
            $(this).siblings(".highlightText").addClass("invisible");
            /* $(this).parent(".articleCard").css('grid-template-rows', '1fr 1fr 1fr 1fr') */
            $(this).parent(".articleCard").css('grid-template-areas',
                ' "articleTitle articleTitle articleTitle articleTitle articleTitle articleTitle" "author author author author . articleYear" "articleJournal articleJournal articleJournal articleJournal articleJournal ." "doi cite . . abstract highlights" "empty empty empty empty empty empty"');
        }


    });

    $(".articleHighlights").on("click", function () {
        //console.log("I was clicked")
        if ($(this).siblings(".highlightText").hasClass("invisible")) {
            /* This is the toggle */
            $(this).siblings(".articleDescription").addClass("invisible");            

            $(this).siblings(".highlightText").removeClass("invisible");
            $(this).parent(".articleCard").css('grid-template-columns', 'repeat(6,1fr);');
            $(this).parent(".articleCard").css('grid-template-rows', 'repeat(5,1fr);');
            /* $(this).parent(".articleCard").css('height', '300px'); */
            $(this).parent(".articleCard").css('grid-template-areas',
                '"articleTitle articleTitle articleTitle articleTitle articleTitle articleTitle" "author author author author . articleYear" "articleJournal articleJournal articleJournal articleJournal articleJournal ." "doi cite . . abstract highlights" "highlight0 highlight0 highlight1 highlight1 highlight2 highlight2"');

        } else {
            $(this).siblings(".highlightText").addClass("invisible");
            $(this).siblings(".articleDescription").addClass("invisible");
            /* $(this).parent(".articleCard").css('grid-template-rows', '1fr 1fr 1fr 1fr') */
            $(this).parent(".articleCard").css('grid-template-areas',
                ' "articleTitle articleTitle articleTitle articleTitle articleTitle articleTitle" "author author author author . articleYear" "articleJournal articleJournal articleJournal articleJournal articleJournal ." "doi cite . . abstract highlights"');
        }


    });

});





var metadata = [

    {
        "type": "peer-review",
        "title": "Array Databases",
        "journal": "The Geographic Information Science & Technology Body of Knowledge",
        "year": 2020,
        "author": "Haynes, D.,",
        "doi": "10.22224/gistbok/2019.3.2",
        "highlights": ["Review of Array Databases", "thing2", "SciDB"],
        "abstract": "Array Databases are a class of No-SQL databases that store, manage, and analyze data whose natural structures are arrays. With the growth of large volumes of spatial data (i.e., satellite imagery) there is a pressing need to have new ways to store and manipulate array data. Currently, there are several databases and platforms that have extended their initial architectures to support for multidimensional arrays. However, extending a platform to support a multidimensional array comes at a performance cost, when compared to Array Databases who specialize in the storage, retrieval, and processing of n-dimensional data."
    },
    {
        "type": "peer-review",
        "title": "IPUMS Terra: Integrated Big Heterogeneous Spatio-Temporal Data Analysis System",
        "journal": "journal of Geographical Systems",
        "year": 2018,
        "author": "Haynes, D., Jokela, A., Manson, S.,",
        "doi": "10.1007/s10109-018-0277-2",
        "highlights": ["Big heterogenous spatial big data is very complex"],
        "abstract": "Big Geo Data promises tremendous benefits to the GIS Science community in particular and the broader scientific community in general, but has been primarily of use to the relatively small body of GIScientists who possess the specialized knowledge and methods necessary for working with this class of data. Much of the greater scientific community is not equipped with the expert knowledge and techniques necessary to fully take advantage of the promise of big spatial data. IPUMS-Terra provides integrated spatiotemporal data to these scholars by simplifying access to thousands of raster and vector datasets, integrating them and providing them in formats that are useable to a broad array of research disciplines. IPUMS-Terra exemplifies a new class of National Spatial Data Infrastructure because it connects a large spatial data repository to advanced computational resources, allowing users to access the needle of information they need from the haystack of big spatial data. The project is trailblazing in its commitment to the open sharing of spatial data and spatial tool development, including describing its architecture, process development workflows, and openly sharing its products for the general use of the scientific community."


    },
    {
        "type": "peer-review",
        "title": "Terra Populus’ Architecture for Integrated Big Geospatial Services",
        "journal": "Transactions in GIS",
        "year": 2017,
        "author": "Haynes, D., Manson, S., Shook, E.,",
        "abstract": "Big geospatial data is an emerging sub‐area of geographic information science, big data, and cyberinfrastructure. Big geospatial data poses two unique challenges. First, raster and vector data structures and analyses have developed on largely separate paths for the last 20 years. This is creating an impediment to geospatial researchers seeking to utilize big data platforms that do not promote heterogeneous data types. Second, big spatial data repositories have yet to be integrated with big data computation platforms in ways that allow researchers to spatio‐temporally analyze big geospatial datasets. IPUMS‐Terra, a National Science Foundation cyberInfrastructure project, addresses these challenges by providing a unified framework of integrated geospatial services which access, analyze, and transform big heterogeneous spatio‐temporal data. As IPUMS‐Terra's data volume grows, we seek to integrate geospatial platforms that will scale geospatial analyses and address current bottlenecks within our system. However, our work shows that there are still unresolved challenges for big geospatial analysis. The most pertinent is that there is a lack of a unified framework for conducting scalable integrated vector and raster data analysis. We conducted a comparative analysis between PostgreSQL with PostGIS and SciDB and concluded that SciDB is the superior platform for scalable raster zonal analyses."
    },
    {
        "type": "peer-review",
        "title": "Terra Populus: Workflows for Integrating and Harmonizing Geospatial Population and Environmental Data",
        "journal": "journal of Map and Geography Libraries",
        "year": 2015,
        "author": "Kugler, T., Van Riper, D., Mason, S., Haynes, D., Donato, J., Stinebaugh, K.,"
    }
]



