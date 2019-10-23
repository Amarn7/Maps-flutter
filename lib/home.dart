import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:location/location.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  // 1
  GoogleMapController _controller;
// 2
  void _setStyle(GoogleMapController controller) async {
    String value = await DefaultAssetBundle.of(context)
        .loadString('assets/maps_style.json');
    controller.setMapStyle(value);
  }

  static final CameraPosition _myLocation =
  CameraPosition(target: LatLng(18.7392, 73.6831),
  zoom: 10.5,
  bearing: 15.0,
  tilt: 75);


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // 1
      body: GoogleMap(
        // 2
        initialCameraPosition: _myLocation,
        // 3
        mapType: MapType.satellite,
        // 4
        onMapCreated: (GoogleMapController controller) {
          _controller= controller;
        },
      ),
    );
  }}