import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<Marker> allMarkers = [];
  GoogleMapController mapController;
  String searchAddr;

  @override
  void initState() {
    super.initState();
    allMarkers.add(
      Marker(
          markerId: MarkerId('myMarker'),
          draggable: true,
          onTap: () {
            print('Tapped');
          },
          position: LatLng(18.5204, 73.8567)),
    );
  }


  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
        statusBarBrightness: Brightness.light));
    return Scaffold(
      body: Stack(
        children: [
          GoogleMap(
            mapType: MapType.hybrid,
//            initialCameraPosition: CameraPosition(
//              target: LatLng(18.5204, 73.8567),
//              zoom: 10.5,
//            ),
//            markers: Set.from(allMarkers),
            onMapCreated: mapCreated,
            options:GoogleMapOptions(
              target :
            )
          ),
          Positioned(
            top: 50.0,
            left: 20.0,
            right: 20.0,
            child: Container(
              height: 45.0,
              width: double.infinity,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(60.0),
                color: Colors.white,
              ),
              child: TextField(
                decoration: InputDecoration(
                    hintText: "Search...",
                    border: InputBorder.none,
                    contentPadding: EdgeInsets.only(
                      left: 15,
                      top: 15,
                    ),
                    suffixIcon: IconButton(
                      icon: Icon(Icons.search),
                      onPressed: searchAndNavigate,
                      iconSize: 30,
                    )),
                onChanged: (val) {
                  searchAddr = val;
                },
              ),
            ),
          ),
        ],
      ),
    );
  }


 searchAndNavigate(){
    Geolocator().placemarkFromAddress(searchAddr).then((result){
      mapController.animateCamera(CameraUpdate.newCameraPosition(
        CameraPosition(
          target: LatLng(result[0].position.latitude,
                          result[0].position.longitude)
        )
      ));
    });
 }

  void mapCreated(controller) {
    setState(() {
      mapController = controller;
    });
  }

}