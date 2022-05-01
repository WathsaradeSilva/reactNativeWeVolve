import 'package:flutter/material.dart';
import 'package:wevolve_project/screens/homePage.dart';

class manualInput extends StatefulWidget {
  const manualInput({Key? key}) : super(key: key);

  @override
  State<manualInput> createState() => _manualInputState();
}

class _manualInputState extends State<manualInput> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text("Add Emotional State Manually"),
        backgroundColor: Colors.lightGreenAccent,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          const Text(
            "CHOOSE YOUR MOOD",
            style: TextStyle(fontSize: 28.0),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              IconButton(
                  onPressed: () {}, icon: Image.asset("assets/smile.png"),iconSize: 80.0,),
              IconButton(
                  onPressed: () {}, icon: Image.asset("assets/neautral.png"),iconSize: 80.0),
              IconButton(onPressed: () {}, icon: Image.asset("assets/sad.png"),iconSize: 80.0)
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              IconButton(
                  onPressed: () {
                    Navigator.of(context).push(MaterialPageRoute(builder: (BuildContext context) {
                      return homePage();
                    }

                    ));
                  },
                  icon: const Icon(
                    Icons.arrow_back,
                    size: 48.0,
                  )),
              IconButton(
                  onPressed: () {},
                  icon: const Icon(
                    Icons.check_circle_outline_rounded,
                    size: 48.0,
                  )),
            ],
          )
        ],
      ),
    );
  }
}
