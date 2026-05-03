from pathlib import Path

from flask import Flask, abort, render_template
from jinja2 import TemplateNotFound

BASE_DIR = Path(__file__).resolve().parent
app = Flask(__name__, template_folder=str(BASE_DIR / "templates"), static_folder=str(BASE_DIR / "static"))


@app.get("/")
def index():
    return render_template("index.html")


@app.get("/<name_page>")
def render_page(name_page: str):
    template_name = f"{name_page}.html"
    try:
        app.jinja_env.get_template(template_name)
    except TemplateNotFound:
        abort(404)
    return render_template(template_name)


if __name__ == "__main__":
    app.run(debug=True)
