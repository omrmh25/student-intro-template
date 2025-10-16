const {
    getStudentName,
    getStudentAge,
    getStudentMajor,
    getStudentHobby
} = require('./introduction');

// اختبار الاسم
function testStudentName() {
    const name = getStudentName();
    if (name === "ــــــــــــــــ" || name.trim() === "") {
        throw new Error("❌ FAIL: لم يتم تعبئة الاسم");
    }
    if (name.length < 2) {
        throw new Error("❌ FAIL: الاسم قصير جداً");
    }
    console.log("✅ PASS: تم تعبئة الاسم بشكل صحيح");
    return true;
}

// اختبار العمر
function testStudentAge() {
    const age = getStudentAge();
    if (age === 0) {
        throw new Error("❌ FAIL: لم يتم تعبئة العمر");
    }
    if (typeof age !== 'number') {
        throw new Error("❌ FAIL: العمر يجب أن يكون رقماً");
    }
    if (age < 10 || age > 100) {
        throw new Error("❌ FAIL: العمر غير منطقي");
    }
    console.log("✅ PASS: تم تعبئة العمر بشكل صحيح");
    return true;
}

// اختبار التخصص
function testStudentMajor() {
    const major = getStudentMajor();
    if (major === "ــــــــــــــــ" || major.trim() === "") {
        throw new Error("❌ FAIL: لم يتم تعبئة التخصص");
    }
    if (major.length < 2) {
        throw new Error("❌ FAIL: التخصص قصير جداً");
    }
    console.log("✅ PASS: تم تعبئة التخصص بشكل صحيح");
    return true;
}

// اختبار الهواية
function testStudentHobby() {
    const hobby = getStudentHobby();
    if (hobby === "ــــــــــــــــ" || hobby.trim() === "") {
        throw new Error("❌ FAIL: لم يتم تعبئة الهواية");
    }
    if (hobby.length < 2) {
        throw new Error("❌ FAIL: الهواية قصيرة جداً");
    }
    console.log("✅ PASS: تم تعبئة الهواية بشكل صحيح");
    return true;
}

// تشغيل جميع الاختبارات
function runAllTests() {
    try {
        console.log("بداية الاختبارات...");
        testStudentName();
        testStudentAge();
        testStudentMajor();
        testStudentHobby();
        console.log("🎉 جميع الاختبارات نجحت! تم تعبئة جميع البيانات بشكل صحيح");
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

// تشغيل الاختبارات إذا تم تنفيذ الملف مباشرة
if (require.main === module) {
    runAllTests();
}

module.exports = {
    testStudentName,
    testStudentAge,
    testStudentMajor,
    testStudentHobby,
    runAllTests
};
