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
    members = {"dpt":[{
        "name": "Michelle",
        "title": "DPT",
        "image": "../static/images/team%20members/michelle.jpg"
    },
    # {
    #     "name": "Rachel",
    #     "title": "DPT",
    #     "image": "../static/images/team%20members/rachel.jpg"
    # },
    # {
    #     "name": "Saahil",
    #     "title": "DPT",
    #     "image": "../static/images/team%20members/saahil.jpg"
    # }
    ], "exec": [{
        "name": "Sree",
        "title": "Executive Chair",
        "image": "../static/images/team%20members/sree.jpg"
    },
    {
        "name": "Sherry",
        "title": "Executive Chair",
        "image": "../static/images/team%20members/sherry.jpg"
    },
    {
        "name": "Annie",
        "title": "Audience Lead",
        "image": "../static/images/team%20members/annie.jpg"
    },
    {
        "name": "Mariah",
        "title": "Audience Lead",
        "image": "../static/images/team%20members/mariah.jpg"
    },
    {
        "name": "Jonathan",
        "title": "DPT Lead",
        "image": "../static/images/team%20members/johnathon.jpg"
    },
    {
        "name": "Chloe",
        "title": "DPT Lead",
        "image": "../static/images/team%20members/chloe.jpg"
    },
        {
            "name": "Alan",
            "title": "Food/Grant Lead",
            "image": "../static/images/team%20members/alan.jpg"
        },
        {
            "name": "Ryleigh",
            "title": "Food/Grant Lead",
            "image": "../static/images/team%20members/ryleigh.jpg"
        },
        {
            "name": "Ella",
            "title": "Speaker Lead",
            "image": "../static/images/team%20members/ella.jpg"
        },
        {
            "name": "Esha",
            "title": "Speaker Lead",
            "image": "../static/images/team%20members/esha.jpg"
        },
        {
            "name": "Rebekah",
            "title": "Speaker Lead",
            "image": "../static/images/team%20members/rebekah.jpg"
        },
        {
            "name": "Sewoe",
            "title": "Speaker Lead",
            "image": "../static/images/team%20members/sewoe.jpg"
        }], "speaker": [
        {
            "name": "Ivan",
            "title": "Speaker",
            "image": "../static/images/team%20members/ivan.jpg"
        },
        {
            "name": "Sophia D.",
            "title": "Speaker",
            "image": "../static/images/team%20members/sophia d.jpg"
        },
        {
            "name": "Sophia S.",
            "title": "Speaker",
            "image": "../static/images/team%20members/sophia s.jpg"
        }
    ], "food": [
        {
            "name": "Abigail",
            "title": "Food/Grant",
            "image": "../static/images/team%20members/abigail.jpg"
        },
        {
            "name": "Akhil",
            "title": "Food/Grant",
            "image": "../static/images/team%20members/akhil.jpg"
        },
        {
            "name": "Jonathan",
            "title": "Food/Grant",
            "image": "../static/images/team%20members/jonathan.jpg"
        }
    ], "audience": [
    {
        "name": "Eliza",
        "title": "Audience",
        "image": "../static/images/team%20members/eliza.jpg"
    },
    {
        "name": "Eric",
        "title": "Audience",
        "image": "../static/images/team%20members/eric.jpg"
    },
    {
        "name": "Maddie",
        "title": "Audience",
        "image": "../static/images/team%20members/maddie.JPG"
    }
    ]}

    return render_template("committee.html", members=members)


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