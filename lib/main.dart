import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Google Maps',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  TextEditingController _editingController = TextEditingController();
  List<Marker> allMarkers = [];
  GoogleMapController mapController;
  String searchAddr;

  @override
  void initState() {
    allMarkers.add(
      Marker(
        markerId: MarkerId('myMarker'),
        draggable: true,
        onTap: () {
          print('Tapped');
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
        statusBarBrightness: Brightness.light));
    return Scaffold(
        body: Stack(
      children: <Widget>[
        GoogleMap(
          onMapCreated: onMapCreated,
          initialCameraPosition:
              CameraPosition(target: LatLng(18.5204, 73.8567), zoom: 13.5),
          markers: Set.from(allMarkers),
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
              color: Colors.white60,
            ),
            child: TextField(
              controller: _editingController,
              decoration: InputDecoration(
                hintText: "Search",
                border: InputBorder.none,
                contentPadding: EdgeInsets.only(
                  left: 15,
                  top: 15,
                ),
                suffixIcon: IconButton(
                  icon: Icon(Icons.search),
                  onPressed: () {
                    searchAndNavigate();
                    _editingController.clear();
                    iconSize:
                    30;
                    FocusScope.of(context).requestFocus(new FocusNode());
                  },
                ),
              ),
              onChanged: (val) {
                searchAddr = val;
              },
            ),
          ),
        ),
      ],
    ));
  }

  searchAndNavigate() {
    Geolocator().placemarkFromAddress(searchAddr).then((result) {
      mapController.animateCamera(
        CameraUpdate.newCameraPosition(
          CameraPosition(
              target: LatLng(
                  result[0].position.latitude, result[0].position.longitude),
              zoom: 9.5),
        ),
      );
    });
  }

  void onMapCreated(controller) {
    setState(() {
      mapController = controller;
    });
  }
}
