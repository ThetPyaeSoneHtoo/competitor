package com.github.adminfaces.starter.bean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;

@ManagedBean(name = "chartBBean")
public class ChartBBean
        implements Serializable {

    private boolean chart1;
    private boolean chart2;
    private boolean piechart;
    private List<Collection> list1;
    private List<Collection> list2;
    private List<String> list3;
    private String dropDownName;
    private String hiddenName;
    private boolean chart3;
    private boolean chart4;
    private boolean fk=false;
    private List<String> zoneList ;
    private String valuediv;

    @PostConstruct
    public void init() {
        hiddenName = "5";
        this.chart1 = false;
        this.chart2 = false;
        this.chart3 = false;
        this.chart4 = false;
        this.piechart = false;
        zoneList = new ArrayList<String>();
        zoneList.add("North");
        zoneList.add("East");
        zoneList.add("South");
        zoneList.add("West");
        valuediv = "12";

    }
    public String showAllianceTable(){
         this.chart1 = false;
        this.chart2 = false;
        this.chart3 = false;
        this.chart4 = false;
        if(hiddenName.equalsIgnoreCase("PLANTS")) {
            this.chart1 = true;
            this.list1 = new ArrayList<Collection>();
            List list = new ArrayList<Collection>();
            list.add(2);
            list.add(4);
            list.add(2);
            list.add(4);
            this.list1.add(list);
            this.list2 = new ArrayList<Collection>();
            list = new ArrayList<Collection>();
            list.add("Sungei Kadut");
            list.add("North");
            list.add("2");
            list.add("Yes");
            list.add("LSS");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("East Coast");
            list.add("South");
            list.add("2");
            list.add("No");
            list.add("-");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Marina East");
            list.add("South");
            list.add("2");
            list.add("Yes");
            list.add("RCA");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Pandan Road");
            list.add("West");
            list.add("2");
            list.add("No");
            list.add("-");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Tuas");
            list.add("West");
            list.add("2");
            list.add("Yes");
            list.add("-");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Punggol");
            list.add("East");
            list.add("2");
            list.add("Yes");
            list.add("-");
            this.list2.add(list);
        } else if (hiddenName.equalsIgnoreCase("CAPACITY")) {
            this.chart2 = true;
            this.list1 = new ArrayList<Collection>();
            List list = new ArrayList<Collection>();
            list.add(35);
            list.add(70);
            list.add(35);
            list.add(70);
            this.list1.add(list);
            this.list2 = new ArrayList<Collection>();
            list = new ArrayList<Collection>();
            list.add("Sungei Kadut");
            list.add("North");
            list.add("2");
            list.add("Yes");
            list.add("LSS");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("East Coast");
            list.add("South");
            list.add("2");
            list.add("No");
            list.add("-");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Marina East");
            list.add("South");
            list.add("2");
            list.add("Yes");
            list.add("RCA");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Pandan Road");
            list.add("West");
            list.add("2");
            list.add("No");
            list.add("-");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Tuas");
            list.add("West");
            list.add("2");
            list.add("Yes");
            list.add("-");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Punggol");
            list.add("East");
            list.add("2");
            list.add("Yes");
            list.add("-");
            this.list2.add(list);
        }
        else if(hiddenName.equalsIgnoreCase("CAPABILITIES")){
            this.chart3 = true;
        }
        return "/view/charts/allianceChart.xhtml?faces-redirect=true";
    }
    public void onOtherCrnameChanged() {
    }
    public boolean mark(String mark){
        if(mark.equals("Yes")){
            return true;
        }
        return false;
    }

    public List<String> getZoneList() {
        return zoneList;
    }

    public void setZoneList(List<String> zoneList) {
        this.zoneList = zoneList;
    }
    
    public void showTable() {
        this.fk=true;
        this.valuediv ="6";
        this.chart1 = false;
        this.chart2 = false;
        this.chart3 = false;
        this.chart4 = false;
        if(hiddenName.equalsIgnoreCase("2")) {
            this.chart1 = true;
            this.list1 = new ArrayList<Collection>();
            List list = new ArrayList<Collection>();
            list.add(2);
            list.add(4);
            list.add(2);
            list.add(4);
            this.list1.add(list);
            this.list2 = new ArrayList<Collection>();
            list = new ArrayList<Collection>();
            list.add("Sungei Kadut");
            list.add("North");
            list.add("2");
            list.add("Yes");
            list.add("LSS");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("East Coast");
            list.add("South");
            list.add("2");
            list.add("No");
            list.add("-");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Marina East");
            list.add("South");
            list.add("2");
            list.add("Yes");
            list.add("RCA");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Pandan Road");
            list.add("West");
            list.add("2");
            list.add("No");
            list.add("-");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Tuas");
            list.add("West");
            list.add("2");
            list.add("Yes");
            list.add("-");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Punggol");
            list.add("East");
            list.add("2");
            list.add("Yes");
            list.add("-");
            this.list2.add(list);
        } else if (hiddenName.equalsIgnoreCase("3")) {
            this.chart2 = true;
            this.list1 = new ArrayList<Collection>();
            List list = new ArrayList<Collection>();
            list.add(35);
            list.add(70);
            list.add(35);
            list.add(70);
            this.list1.add(list);
            this.list2 = new ArrayList<Collection>();
            list = new ArrayList<Collection>();
            list.add("Sungei Kadut");
            list.add("North");
            list.add("2");
            list.add("35");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("East Coast");
            list.add("South");
            list.add("2");
            list.add("35");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Marina East");
            list.add("South");
            list.add("2");
            list.add("35 ");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Pandan Road");
            list.add("West");
            list.add("2");
            list.add("35 ");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Tuas");
            list.add("West");
            list.add("2");
            list.add("35 ");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Punggol");
            list.add("East");
            list.add("2");
            list.add("35 ");
            this.list2.add(list);
        }
        else if(hiddenName.equalsIgnoreCase("4")){
            this.chart3 = true;
        }
        else if(hiddenName.equalsIgnoreCase("0")){
            this.chart4 = true;
            this.list1 = new ArrayList<Collection>();
            List list = new ArrayList<Collection>();
            list.add(35);
            list.add(70);
            list.add(35);
            list.add(70);
            this.list1.add(list);
            this.list2 = new ArrayList<Collection>();
            list = new ArrayList<Collection>();
            list.add("Sungei Kadut");
            list.add("North");
            list.add("2");
            list.add("Yes");
            list.add("Txx");
            list.add("Jan 2010-Dec 2018");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("East Coast");
            list.add("South");
            list.add("2");
            list.add("Yes");
            list.add("Txxx");
            list.add("Jan 2010-Dec 2018");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Marina East");
            list.add("South");
            list.add("2");
            list.add("No");
            list.add("Txx");
            list.add("Jan 2010-Dec 2018");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Pandan Road");
            list.add("West");
            list.add("2");
            list.add("No");
            list.add("");
            list.add("Jan 2010-Dec 2018");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Tuas");
            list.add("West");
            list.add("2");
            list.add("Yes");
            list.add("");
            list.add("Jan 2010-Dec 2018");
            this.list2.add(list);
            list = new ArrayList<Collection>();
            list.add("Punggol");
            list.add("East");
            list.add("2");
            list.add("No");
            list.add("");
            list.add("Jan 2010-Dec 2018");
            this.list2.add(list);
        }
        else{
            valuediv = "12";
        }
        
    }

    public void showChart() {
        this.chart1 = true;
        this.chart2 = true;
        this.piechart = true;
    }

    public boolean isChart1() {
        return this.chart1;
    }

    public void setChart1(boolean chart1) {
        this.chart1 = chart1;
    }

    public boolean isChart2() {
        return this.chart2;
    }

    public void setChart2(boolean chart2) {
        this.chart2 = chart2;
    }

    public boolean isPiechart() {
        return this.piechart;
    }

    public void setPiechart(boolean piechart) {
        this.piechart = piechart;
    }

    public List<Collection> getList1() {
        return this.list1;
    }

    public void setList1(List<Collection> list1) {
        this.list1 = list1;
    }

    public List<Collection> getList2() {
        return this.list2;
    }

    public void setList2(List<Collection> list2) {
        this.list2 = list2;
    }

    public List<String> getList3() {
        return this.list3;
    }

    public void setList3(List<String> list3) {
        this.list3 = list3;
    }

    public String getDropDownName() {
        return this.dropDownName;
    }

    public void setDropDownName(String dropDownName) {
        this.dropDownName = dropDownName;
    }

    public String getHiddenName() {
        return hiddenName;
    }

    public void setHiddenName(String hiddenName) {
        this.hiddenName = hiddenName;
    }

    public boolean isChart3() {
        return chart3;
    }

    public void setChart3(boolean chart3) {
        this.chart3 = chart3;
    }

    public boolean isFk() {
        return fk;
    }

    public void setFk(boolean fk) {
        this.fk = fk;
    }

    public String getValuediv() {
        return valuediv;
    }

    public void setValuediv(String valuediv) {
        this.valuediv = valuediv;
    }

    public boolean isChart4() {
        return chart4;
    }

    public void setChart4(boolean chart4) {
        this.chart4 = chart4;
    }
    
    
    
}
