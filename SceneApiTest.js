const chaii = require('chai');
const expect = chaii.expect;

const SceneRepository = require('./SceneRepository');

// TODO: more complex tests with advanced mocking
describe('Api Tests', () => {
    it("should return user scene and camera", (done) => {
        var expectedResult = [{
            geoData: {
                sceneState: {
                    x: 1,
                    y: 2
                },
                cameraState: [1, 2, 3, 4]
            }
        }];

        var DbServiceMock = {
            getScene: function (clientId, callback) {
                callback(expectedResult)
            }
        };

        SceneRepository.get(1, DbServiceMock, (jsonModel) => {
            expect(jsonModel.cameraState.length).equals(4);
            done();
        });
    });
});
