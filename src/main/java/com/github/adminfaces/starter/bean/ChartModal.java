package com.github.adminfaces.starter.bean;

import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import org.omnifaces.util.Faces;

@ManagedBean(name = "chartModal")
public class ChartModal
        implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    List<String> filterName = new ArrayList<String>();
    private String charttitle = "Batching Plant";
    private String selectedName = "";
    private String batchingPlant = "5<br>BATCHING<br>PLANTS";
    private String volume = "";
    private String truck = "";
    private String batchCapacity = "";
    private String hiddenName = "";

    @PostConstruct
    public void init() {
        this.filterName = new ArrayList<String>();
        this.filterName.add("Total Batching Plant & Capacity");
        this.filterName.add("Total Number of Trucks");
        hiddenName = "";
    }

    public void onfirstchartChange() throws IOException {
        if (charttitle.equalsIgnoreCase("Total Batching Plant & Capacity")) {
            this.filterName = new ArrayList<String>();
            this.filterName.add("Total Batching Plant & Capacity");
            this.filterName.add("Total Number of Trucks");
            Faces.redirect("view/charts/first_chart.xhtml");
        } else {
            this.filterName = new ArrayList<String>();
            this.filterName.add("Total Number of Trucks");
            this.filterName.add("Total Batching Plant & Capacity");
            Faces.redirect("view/charts/second_chart.xhtml");
        }
    }

    public String click() {
        if (hiddenName.equalsIgnoreCase("PAN UNITED")) {
            return "/view/charts/panuChart.xhtml?faces-redirect=true";
        } else if (hiddenName.equalsIgnoreCase("ISLAND")) {
            return "/view/charts/donutChart.xhtml?faces-redirect=true";
        } else if (hiddenName.equalsIgnoreCase("ALLIANCE")) {
            return "/view/charts/allianceChart.xhtml?faces-redirect=true";
        } else if (hiddenName.equalsIgnoreCase("SINMIX")) {
            return "/view/charts/sinmixChart.xhtml?faces-redirect=true";
        } else if (hiddenName.equalsIgnoreCase("YTL")) {
            return "/view/charts/ytlChart.xhtml?faces-redirect=true";
        } else if (hiddenName.equalsIgnoreCase("SAMWOH")) {
            return "/view/charts/samwohChart.xhtml?faces-redirect=true";
        }
        return "";
    }

    public List<String> getFilterName() {
        return this.filterName;
    }

    public void setFilterName(List<String> filterName) {
        this.filterName = filterName;
    }

    public String getSelectedName() {
        return this.selectedName;
    }

    public void setSelectedName(String selectedName) {
        this.selectedName = selectedName;
    }

    public String getBatchingPlant() {
        return this.batchingPlant;
    }

    public void setBatchingPlant(String batchingPlant) {
        this.batchingPlant = batchingPlant;
    }

    public String getVolume() {
        return this.volume;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }

    public String getTruck() {
        return this.truck;
    }

    public void setTruck(String truck) {
        this.truck = truck;
    }

    public String getBatchCapacity() {
        return this.batchCapacity;
    }

    public void setBatchCapacity(String batchCapacity) {
        this.batchCapacity = batchCapacity;
    }

    public String getCharttitle() {
        return this.charttitle;
    }

    public void setCharttitle(String charttitle) {
        this.charttitle = charttitle;
    }

    public String getHiddenName() {
        return hiddenName;
    }

    public void setHiddenName(String hiddenName) {
        this.hiddenName = hiddenName;
    }

}
