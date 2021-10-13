"use strict";
const assert = require("assert");
const methods = require("./arraysTest.js");
const maxOfThree = methods.maxOfThree;
const sumNumbers = methods.sumNumbers;
const multiplyNumbers = methods.multiplyNumbers;
const findLongestword = methods.findLongestword;
const reverseArray = methods.reverseArray;
const scoreExams = methods.scoreExams;
const reverseArrayInPlace = methods.reverseArrayInPlace


describe("maxOfThree", function () {
    it("4 is maximum of three", function () {
        assert.equal(maxOfThree(2, 3, 4), 4);
    });
    it("8 is maximum of three", function () {
        assert.equal(maxOfThree(2, 6, 8), 8);
    });
    it("10 is maximum of three", function () {
        assert.equal(maxOfThree(10, 3, 7), 10);
    });
});

describe("sumNumbers", function () {
    it("6 is the sum of 1,2,3", function () {
        assert.equal(sumNumbers([1, 2, 3]), 6);
    });
    it("17 is the sum of 6,10,1", function () {
        assert.equal(sumNumbers([6, 1, 10]), 17);
    });
});

describe("multiplyNumbers", function () {
    it("6 is the multiplied value of 1,2,3", function () {
        assert.equal(multiplyNumbers([1, 2, 3]), 6);
    });
    it("60 is the multiplied value of 6,1,10", function () {
        assert.equal(multiplyNumbers([6, 1, 10]), 60);
    });
});

describe("findLongestword", function () {

    it("it is the longest word", function () {
        assert.equal(findLongestword(["fiker1", "luwam"]), 6);
    });
    it("it is the longest word", function () {
        assert.equal(findLongestword(["one", "seven", "four"]), 5);
    });
});
describe("reverseArray", function () {
    it("tests reverseArray odd number elements", function () {
        assert.deepEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
    });
    it("tests reverseArray even number elements", function () {
        assert.deepEqual(reverseArray(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
    });
    it("tests reverseArrayInPlace even number elements", function () {
        assert.deepEqual(reverseArrayInPlace(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
    });
    it("tests reverseArrayInPlace odd number elements", function () {
        assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});


describe("score exam", function () {
    const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
    const correctAnswers = [3, 1, 2,4];
    it("exam with 3 students", function () {
        assert.deepEqual(scoreExams(studentAnswers, correctAnswers), [3,2,3]);
    });
    it("exam with 3 students: one student has all incorrect answers", function () {
        assert.deepEqual(scoreExams( [[1, 1, 2,4], [2, 1, 2,2], [1,2, 3,1]], correctAnswers), [3,2,0]);
    });
    it("exam with 3 students: one student has all correct answers", function () {
        assert.deepEqual(scoreExams( [[1, 1, 2,4], [2, 1, 2,2],[3, 1, 2,4]], correctAnswers), [3,2,4]);
    });
});

