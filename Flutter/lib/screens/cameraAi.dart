import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:fluttertoast/fluttertoast.dart';

import 'package:image_picker/image_picker.dart';

class CameraAi extends StatefulWidget {
  const CameraAi({Key? key}) : super(key: key);

  @override
  State<CameraAi> createState() => _CameraAiState();
}

class _CameraAiState extends State<CameraAi> {
  late File _image;
  var hello = "";
  final imagePicker = ImagePicker();


  Future getImageCamera() async {
    final image =
        await ImagePicker.platform.getImage(source: ImageSource.camera);
    setState(() {
      _image = File(image!.path);
    });
  }

  Future getImageGallery() async {
    final image =
        await ImagePicker.platform.getImage(source: ImageSource.gallery);
    setState(() {
      _image = File(image!.path);
    });
  }

  TextEditingController nameController = TextEditingController();

  Future uploadImage() async{
    final uri = Uri.parse("");
    var request = http.MultipartRequest('POST',uri);
    request.fields['name'] = nameController.text;
    var pic = await http.MultipartFile.fromPath("Image",_image.path);
    request.files.add(pic);

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Capture your natural state"),
        backgroundColor: Colors.black45,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          RaisedButton.icon(
            color: Colors.white,
            icon: const Icon(
              Icons.camera,
              color: Colors.blue,
              size: 280.0,
            ),
            onPressed: () {
              getImageCamera();
            },
            label: Text(""),
          ),

          const Text(
            "Select Image From gallery",
            style: TextStyle(fontSize: 28.0,fontWeight: FontWeight.bold),
          ),
          IconButton(
            icon: const Icon(
              Icons.image,
              size: 58.0,
              color: Colors.pinkAccent,
            ),
            onPressed: () {
              getImageGallery();
            },
          ),
          Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
            IconButton(
                onPressed: () {},
                icon: const Icon(
                  Icons.arrow_back,
                  size: 28.0,
                )),
            IconButton(
                onPressed: () {
                  uploadImage();
                },
                icon: const Icon(
                  Icons.add_circle,
                  size: 28.0,
                )),
            IconButton(
                onPressed: () {
                  Future<http.Response> fetchAlbum() {
                    return http.get(Uri.parse('http://192.168.1.124:3000/emotion/sad'));
                  }
                 fetchAlbum().then((value) => {
                 Fluttertoast.showToast(
                 msg: value.body,
                 toastLength: Toast.LENGTH_SHORT,
                 gravity: ToastGravity.CENTER,
                 timeInSecForIosWeb: 1,
                 backgroundColor: Colors.red,
                 textColor: Colors.white,
                 fontSize: 16.0
                 )
                 });
                },
                icon: const Icon(
                  Icons.accessible,
                  size: 28.0,
                )),
          ]),
        ],
      ),
    );
  }
}
