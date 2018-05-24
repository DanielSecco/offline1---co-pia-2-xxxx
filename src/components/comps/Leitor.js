function updateUI(data) {

    for (var i = 0; i < data.length; i++) {
writeData('sync-posts', data[i]);
        console.log(i);

    }
}
fetch('http://192.168.0.8/trash/trees')
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {

        window.dataArrayTree = [];
        for (var key in data) {
            dataArrayTree.push(data[key]);

        }
        
        updateUI(dataArrayTree[0]);
        console.log('From web FETCH 0 >', dataArrayTree);
    })
    .catch(function (err) {
        console.log(err);
    });
/*
fetch('http://192.168.0.8/trash/trees').then(function (response) {
    return caches.open('Tress').then(function (cache) {
        return cache.put('tressList', response);
    });
});*/


var url = 'http://192.168.0.8/trash/trees';
var networkDataReceived = false;
fetch(url)
    .then(function (res) {
     console.log(res);
        return res.json();
    })
    .then(function (data) {
        networkDataReceived = true;
        window.furlf = data;
    
       // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH 1 >', data);
        var dataArray = [];
        var uio = [];
        for (var key in data) {
            dataArray.push(data[key]);
            uio.push(data[key]);
            writeData('trees', data[key]);
        }
       // updateUI(dataArray);
        window.dados1 = uio;
       // console.log(uio.length + '<???>' + jhg);
        return window.dados1, window.furlf;
    }).catch(function (err) {
        console.log(err);
    });