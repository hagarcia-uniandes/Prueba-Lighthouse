'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 2000;

class LoadAudit extends Audit {
    static get meta(){
        return{
            category: 'MyPerformance',
            id: 'card-audit',
            title: 'Schedule card initialized and ready',
            failureTitle: 'MyPerformance',
            description: 'Schedule card initialized and ready',
            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts){
        const loadedTime = artifacts.TimeToCard;
        const belowThreshold = loadedTime <= MAX_CARD_TIME;
        return{
            rawValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;