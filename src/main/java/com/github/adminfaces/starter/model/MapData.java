/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.adminfaces.starter.model;

/**
 *
 * @author SSMin
 */
public class MapData {
    private String batchingPlantLocation;
    private String latitude;
    private String longitude;
    private String noOfBatchingPlant;
    private String noOfTrack;
    private String batchingCapacity;

    public MapData() {
    }

    public MapData(String batchingPlantLocation, String latitude, String longitude, String noOfBatchingPlant, String noOfTrack, String batchingCapacity) {
        this.batchingPlantLocation = batchingPlantLocation;
        this.latitude = latitude;
        this.longitude = longitude;
        this.noOfBatchingPlant = noOfBatchingPlant;
        this.noOfTrack = noOfTrack;
        this.batchingCapacity = batchingCapacity;
    }

    public String getBatchingPlantLocation() {
        return batchingPlantLocation;
    }

    public void setBatchingPlantLocation(String batchingPlantLocation) {
        this.batchingPlantLocation = batchingPlantLocation;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getNoOfBatchingPlant() {
        return noOfBatchingPlant;
    }

    public void setNoOfBatchingPlant(String noOfBatchingPlant) {
        this.noOfBatchingPlant = noOfBatchingPlant;
    }

    public String getNoOfTrack() {
        return noOfTrack;
    }

    public void setNoOfTrack(String noOfTrack) {
        this.noOfTrack = noOfTrack;
    }

    public String getBatchingCapacity() {
        return batchingCapacity;
    }

    public void setBatchingCapacity(String batchingCapacity) {
        this.batchingCapacity = batchingCapacity;
    }
    
}
