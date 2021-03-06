# MagicMirror

A smart mirror with Google Assistant, Spotify, Youtube, Facial Recognition, and Radio Playback

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
1. Download and install the latest Node.js version:
    * ```curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -```
    * ```sudo apt install -y nodejs```
2. Clone the repository: ```git clone https://github.com/sat-wik/magic-mirror```
3. Enter the repository: ```cd MagicMirror/```
4. Install the application: ```npm install```
5. Make a copy of the config sample file: ```cp config/config.js.sample config/config.js```
6. * Start the application: ```npm run start```
   * For Server Only use: ```npm run server```

---

### Usage

It is important to note:
* ```npm start``` does not work via SSH. But you can use ```DISPLAY=:0 nohup npm start &``` instead.
* This starts the mirror on the remote display.
* If you want to debug on Raspberry Pi you can use ```npm start dev``` which will start MM with Dev Tools enabled.
* To access toolbar menu when in mirror mode, hit ```ALT``` key.
* To toggle the (web) ```Developer Tools``` from mirror mode, use ```CTRL-SHIFT-I``` or ```ALT``` and select ```View```.

---

### Configuration
1. Copy ```/home/pi/MagicMirror/config/config.js.sample``` to ```/home/pi/MagicMirror/config/config.js```.\
   Note: If you used the installer script this step is already done for you.

2. Modify your required settings.\
   Note: You can check your configuration running ```npm run config:check``` in ```/home/pi/MagicMirror```.

3. For more information on configuring the screen and auto-start procedure visit: \
   https://docs.magicmirror.builders/getting-started/configuration.html#raspberry-specific
   
---

## Modules

1. MMM-GoogleAssistant
2. MMM-Assistant2Display
3. MMM-Remote-Control
4. MMM-Face-Reco-DNN

### MMM-GoogleAssistant
A module for enabling Google Assistant on this smart mirror

#### Requirements

* MagicMirror V2.11.0 and more
* Raspberry pi: Raspbian Buster is needed
* (tested on Linux Debian 10)



```

```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
