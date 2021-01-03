from flask import render_template

from application import app


@app.route("/")
@app.route("/main")
def home():
    return render_template("main.html")


@app.route("/auditorium")
def auditorium():
    return render_template("auditorium.html")


@app.route("/exhibits")
def exhibits():
    return render_template("exhibits.html")


@app.route("/committee")
def committee():
    return render_template("committee.html")


@app.route("/photobooth")
def photobooth():
    return render_template("photobooth.html")


@app.route("/sponsors")
def sponsors():
    return render_template("sponsors.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/speakers")
def speakers():
    return render_template("speakers.html")