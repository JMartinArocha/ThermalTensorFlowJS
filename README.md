# Temperature Conversion Model using TensorFlow and TensorFlow.js

![CelsiusFarhenheit](CelsiusFarhenheit.png)

## Overview
This project implements a machine learning model to convert temperatures from Fahrenheit to Celsius using TensorFlow. After training, the model is exported to TensorFlow.js for use in a web application, enabling temperature conversions directly in the browser. This source code supports a tutorial video on exporting TensorFlow models to TensorFlow.js, available on the [Ringa Tech YouTube channel](https://youtube.com/RingaTech).


## Badges

![GitHub license](https://img.shields.io/github/license/JMartinArocha/ThermalTensorFlowJS.svg)
![Python version](https://img.shields.io/badge/python-3.x-blue.svg)
![last-commit](https://img.shields.io/github/last-commit/JMartinArocha/ThermalTensorFlowJS)
![issues](https://img.shields.io/github/issues/JMartinArocha/ThermalTensorFlowJS)
![commit-activity](https://img.shields.io/github/commit-activity/m/JMartinArocha/ThermalTensorFlowJS)
![repo-size](https://img.shields.io/github/repo-size/JMartinArocha/ThermalTensorFlowJS)

## Dataset Generation
The dataset consists of 1000 synthetic temperature pairs (Fahrenheit and Celsius). The function `generate_temperature_data` is used to create this dataset, ensuring a wide range of temperature values. The dataset is then saved to a CSV file for further use.

## Model Training and Validation
The dataset is split into 80% for training and 20% for testing. Additionally, 5% of the training data is reserved for validation purposes. This helps in fine-tuning the model parameters without overfitting.

## Model Architecture
The model is a simple neural network with three dense layers designed to perform regression tasks. The TensorFlow framework is used for constructing and training the model.

## Loss and Accuracy Visualization
After training, the model's performance is visualized through loss and mean absolute error plots. These plots are crucial for understanding the model's learning progress over epochs and adjusting training parameters if necessary.

## Model Export and Web Implementation
The trained model is exported using TensorFlow.js, which allows the TensorFlow model to run directly in the web browser. The web application allows users to input temperatures in Fahrenheit and view the converted Celsius temperatures in real-time.

## How to Use

### Download the Repository
Download the repository to your preferred location on your computer.

### Start a Server in the Folder
This project uses a TensorFlow.js model, which requires http/https access to load.

You can use any server, but here is a way to do it:
- Download Python on your computer.
- Open a command line or terminal.
- Navigate to the folder `web` where you downloaded the repository.
- Run the command `python -m http.server 8000`.
- Open a browser and go to http://localhost:8000.

### Usage
Move the Celsius degree slider, and the prediction in Fahrenheit will be displayed.

## Issues
If you encounter any problems, please log an issue here or leave me a comment on the YouTube video. Be sure to first check your browser's developer console to see if you can identify the problem.

### About virtual envs

Using a virtual environment in Python is a best practice for managing project dependencies. It allows you to create a self-contained directory that contains all the Python executable files and packages you need for your project. This way, you can avoid conflicts between package versions across different projects.

## Why Use a Virtual Environment?
- Dependency Management: Each project can have its dependencies without affecting other projects or the global Python installation.
- Reproducibility: Makes it easier to share and collaborate with others, ensuring that everyone has the same setup.
- Isolation: Prevents inadvertent changes to system files and configurations.

## Setting Up a Virtual Environment
Here’s how to set up a virtual environment for your clustering project:

1. Install Virtual Environment
First, you need to install the virtualenv package if it's not already installed. This package allows you to create virtual environments in Python. You can install it using pip:

```shell
pip install virtualenv
```

2. Create a Virtual Environment
Navigate to your project directory, or where you want to set up your project:

```shell
cd path/to/your/project
```

Now, create a virtual environment within this directory:

Here, venv is the name of the virtual environment directory. You can name it anything, but venv or .venv is typical.

``` shell
virtualenv venv
```

3. Activate the Virtual Environment
Before using the environment, you need to activate it:

```shell
venv\Scripts\activate # Windows
source venv/bin/activate # Linux/macOS
```

Deactivate the Environment
To stop using the virtual environment and go back to your global Python, you simply type:

```shell
deactivate
```

Keeping Track of Dependencies
To make it easier for others to set up the same environment, it’s good practice to save your dependencies in a requirements.txt file:

```shell
pip freeze > requirements.txt
```

This command writes a list of all installed packages and their versions to the requirements.txt file. Others can install all required packages using:

```shell
pip install -r requirements.txt
```

### Prerequisites

Before running the scripts, it's essential to install the necessary Python packages. The project has a `requirements.txt` file listing all the dependencies. You can install these using `pip`. 

Note: The commands below are intended to be run in a Jupyter notebook environment, where the `!` prefix executes shell commands. If you're setting up the project in a different environment, you may omit the `!` and run the commands directly in your terminal.

```bash
!pip3 install --upgrade pip
!pip3 install -r requirements.txt
```
