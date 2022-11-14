document.onreadystatechange = (() => {
    if (document.readyState === "complete") {
        main();
    }
});

const getTemplate = (obj) => {
    return `<div class="col-auto col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card" style="background: var(--bs-card-cap-bg);border-radius: 24px;border-width: 2px;border-color: rgb(23,24,24);">
                        <div class="card-body">
                            <h4 class="card-title" style="font-weight: bold;">${obj.theme}<br></h4>
                            <h6 class="fs-5 text-muted card-subtitle mb-2"><br><span style="color: rgb(33, 37, 41);">${obj.speaker}</span><br><br></h6>
                            <p class="fs-5 card-text"><i class="far fa-clock"></i><span>${obj.start}</span></p>
                        </div>
                    </div>
                </div>`;
}

function main() {
    const nov24Container = document.getElementById("nov24");
    const nov25Container = document.getElementById("nov25");
    const nov26Container = document.getElementById("nov26");

    nov24Container.innerHTML = "";
    nov25Container.innerHTML = "";
    nov26Container.innerHTML = "";
    fetch('/assets/data/agenda.json').then(res => res.json()).then((data) => {
        let nov24Content = "";
        let nov25Content = "";
        let nov26Content = "";

        for (let i = 0; i < data["nov24"].length; i++) {
            nov24Content += getTemplate(data["nov24"][i]);
        }
        for (let i = 0; i < data["nov25"].length; i++) {
            nov25Content += getTemplate(data["nov25"][i]);
        }
        for (let i = 0; i < data["nov26"].length; i++) {
            nov26Content += getTemplate(data["nov26"][i]);
        }
        nov24Container.innerHTML = nov24Content;
        nov25Container.innerHTML = nov25Content;
        nov26Container.innerHTML = nov26Content;
    });


}
