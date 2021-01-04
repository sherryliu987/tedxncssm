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
        "name": "Sree",
        "title": "DPT",
        "image": "../static/images/team%20members/Sree.jpeg"
    },{
        "name": "Jonathan",
        "title": "DPT",
        "image": "../static/images/team%20members/Jonathan.jpg"
    },{
        "name": "Chloe",
        "title": "DPT",
        "image": "../static/images/team%20members/Chloe.png"
    }], "exec": [{
        "name": "Sasha",
        "title": "Executive Chair",
        "bio": "I love TEDx because it gives me the opportunity to spread ideas to a wide audience, as well as learn how to organize such a large and important event!",
        "image": "../static/images/team%20members/Sasha.jpg"
    },{
        "name": "Sriya",
        "title": "Vice Chair",
        "image": "../static/images/team%20members/Sriya.png"
    },{
        "name": "Emily",
        "title": "DPT Chair",
        "image": "../static/images/team%20members/Emily.png"
    },{
        "name": "Bettie",
        "title": "Speaker Chair",
        "image": "../static/images/team%20members/Bettie.png"
    },{
        "name": "Rindha",
        "title": "Speaker Chair",
        "image": "../static/images/team%20members/Rindha.png"
    },{
        "name": "Esha",
        "title": "Speaker Chair",
        "image": "../static/images/team%20members/Esha.png"
    },{
        "name": "Colleen",
        "title": "Food/Grant Chair",
        "image": "../static/images/team%20members/Colleen.png"
    },{
        "name": "Nina N.",
        "title": "Food/Grant Chair",
        "image": "../static/images/team%20members/Nina_N.png"
    },{
        "name": "Nina Z.",
        "title": "Audience Chair",
        "image": "../static/images/team%20members/Nina_Z.png"
    },{
        "name": "Annamarie",
        "title": "Audience Chair",
        "image": "../static/images/team%20members/Annamarie.png"
    }], "speaker": [{
        "name": "Sherry",
        "title": "Speaker",
        "image": "../static/images/team%20members/Sherry.jpeg"
    },{
        "name": "Ella",
        "title": "Speaker",
        "image": "../static/images/team%20members/Ella.png"
    },{
        "name": "Rebekah",
        "title": "Speaker",
        "image": "../static/images/team%20members/Rebekah.png"
    },{
        "name": "Anushka",
        "title": "Speaker",
        "image": "../static/images/team%20members/Anushka.png"
    }], "food": [{
        "name": "Ryleigh",
        "title": "Food/Grant",
        "image": "../static/images/team%20members/Ryleigh.png"
    },{
        "name": "Samya",
        "title": "Food/Grant",
        "image": "../static/images/team%20members/Samya.png"
    },{
        "name": "Chris",
        "title": "Food/Grant",
        "image": "../static/images/team%20members/Chris.png"
    },{
        "name": "Alan",
        "title": "Food/Grant",
        "image": "../static/images/team%20members/Alan.png"
    }], "audience": [{
        "name": "Gavin",
        "title": "Audience",
        "image": "../static/images/team%20members/Gavin.png"
    },{
        "name": "Isaac",
        "title": "Audience",
        "image": "../static/images/team%20members/Isaac.png"
    }]}

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