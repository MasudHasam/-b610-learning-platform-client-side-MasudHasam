import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
    Document,
    Page,
    View,
    Image,
    Text,
    StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    image: {
        width: "20%",
        padding: 10
    },
    text: {
        fontSize: '12px',
        margin: '10px',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const CourseDetails = () => {
    const course = useLoaderData()
    const { name, about, picture } = course;
    const MyDoc = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image style={styles.image} src={picture}></Image>
                    <Text>{name}</Text>
                    <Text style={styles.text} >{about}</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{about}</p>
                        <button>Download PDF</button>
                    </div>
                    <div>
                        <PDFDownloadLink document={<MyDoc />} fileName="coursedetail.pdf">

                            <button type="button" className="font-semibold py-1 px-2 rounded-md bg-teal-600 text-gray-100">DownLoad PDF</button>
                        </PDFDownloadLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;