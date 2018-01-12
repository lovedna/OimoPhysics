// externs for closure compiler
OIMO.BroadPhaseType.BRUTE_FORCE;
OIMO.BroadPhaseType.BVH;
OIMO.Proxy.userData;
OIMO.GeometryType.SPHERE;
OIMO.GeometryType.BOX;
OIMO.GeometryType.CYLINDER;
OIMO.GeometryType.CONE;
OIMO.GeometryType.CAPSULE;
OIMO.GeometryType.CONVEX_HULL;
OIMO.RayCastHit.position;
OIMO.RayCastHit.normal;
OIMO.RayCastHit.fraction;
OIMO.DetectorResult.numPoints;
OIMO.DetectorResult.points;
OIMO.DetectorResult.normal;
OIMO.DetectorResult.incremental;
OIMO.DetectorResultPoint.position1;
OIMO.DetectorResultPoint.position2;
OIMO.DetectorResultPoint.depth;
OIMO.DetectorResultPoint.id;
OIMO.Vec3.x;
OIMO.Vec3.y;
OIMO.Vec3.z;
OIMO.Vec3.numCreations;
OIMO.Setting.defaultFriction;
OIMO.Setting.defaultRestitution;
OIMO.Setting.defaultDensity;
OIMO.Setting.defaultCollisionGroup;
OIMO.Setting.defaultCollisionMask;
OIMO.Setting.maxTranslationPerStep;
OIMO.Setting.maxRotationPerStep;
OIMO.Setting.bvhProxyPadding;
OIMO.Setting.bvhIncrementalCollisionThreshold;
OIMO.Setting.defaultGJKMargin;
OIMO.Setting.enableGJKCaching;
OIMO.Setting.maxEPAVertices;
OIMO.Setting.maxEPAPolyhedronFaces;
OIMO.Setting.contactEnableBounceThreshold;
OIMO.Setting.velocityBaumgarte;
OIMO.Setting.positionSplitImpulseBaumgarte;
OIMO.Setting.positionNgsBaumgarte;
OIMO.Setting.contactUseAlternativePositionCorrectionAlgorithmDepthThreshold;
OIMO.Setting.defaultContactPositionCorrectionAlgorithm;
OIMO.Setting.alternativeContactPositionCorrectionAlgorithm;
OIMO.Setting.contactPersistenceThreshold;
OIMO.Setting.maxManifoldPoints;
OIMO.Setting.defaultJointConstraintSolverType;
OIMO.Setting.defaultJointPositionCorrectionAlgorithm;
OIMO.Setting.jointWarmStartingFactorForBaungarte;
OIMO.Setting.jointWarmStartingFactor;
OIMO.Setting.minSpringDamperDampingRatio;
OIMO.Setting.minRagdollMaxSwingAngle;
OIMO.Setting.maxJacobianRows;
OIMO.Setting.directMlcpSolverEps;
OIMO.Setting.islandInitialRigidBodyArraySize;
OIMO.Setting.islandInitialConstraintArraySize;
OIMO.Setting.sleepingVelocityThreshold;
OIMO.Setting.sleepingAngularVelocityThreshold;
OIMO.Setting.sleepingTimeThreshold;
OIMO.Setting.disableSleeping;
OIMO.Setting.linearSlop;
OIMO.Setting.angularSlop;
OIMO.GjkEpa.closestPoint1;
OIMO.GjkEpa.closestPoint2;
OIMO.GjkEpa.distance;
OIMO.GjkEpaResultState.SUCCEEDED;
OIMO.GjkEpaResultState.GJK_FAILED_TO_MAKE_TETRAHEDRON;
OIMO.GjkEpaResultState.GJK_DID_NOT_CONVERGE;
OIMO.GjkEpaResultState.EPA_FAILED_TO_INIT;
OIMO.GjkEpaResultState.EPA_FAILED_TO_ADD_VERTEX;
OIMO.GjkEpaResultState.EPA_DID_NOT_CONVERGE;
OIMO.Mat3.e00;
OIMO.Mat3.e01;
OIMO.Mat3.e02;
OIMO.Mat3.e10;
OIMO.Mat3.e11;
OIMO.Mat3.e12;
OIMO.Mat3.e20;
OIMO.Mat3.e21;
OIMO.Mat3.e22;
OIMO.Mat3.numCreations;
OIMO.Mat4.e00;
OIMO.Mat4.e01;
OIMO.Mat4.e02;
OIMO.Mat4.e03;
OIMO.Mat4.e10;
OIMO.Mat4.e11;
OIMO.Mat4.e12;
OIMO.Mat4.e13;
OIMO.Mat4.e20;
OIMO.Mat4.e21;
OIMO.Mat4.e22;
OIMO.Mat4.e23;
OIMO.Mat4.e30;
OIMO.Mat4.e31;
OIMO.Mat4.e32;
OIMO.Mat4.e33;
OIMO.Mat4.numCreations;
OIMO.MathUtil.POSITIVE_INFINITY;
OIMO.MathUtil.NEGATIVE_INFINITY;
OIMO.MathUtil.PI;
OIMO.MathUtil.TWO_PI;
OIMO.MathUtil.HALF_PI;
OIMO.MathUtil.TO_RADIANS;
OIMO.MathUtil.TO_DEGREES;
OIMO.Quat.x;
OIMO.Quat.y;
OIMO.Quat.z;
OIMO.Quat.w;
OIMO.Quat.numCreations;
OIMO.TimeStep.dt;
OIMO.TimeStep.invDt;
OIMO.TimeStep.dtRatio;
OIMO.AabbTestCallback.process;
OIMO.ContactCallback.beginContact;
OIMO.ContactCallback.preSolve;
OIMO.ContactCallback.postSolve;
OIMO.ContactCallback.endContact;
OIMO.RayCastCallback.process;
OIMO.RayCastClosest.shape;
OIMO.RayCastClosest.position;
OIMO.RayCastClosest.normal;
OIMO.RayCastClosest.fraction;
OIMO.RayCastClosest.hit;
OIMO.DebugDraw.wireframe;
OIMO.DebugDraw.drawShapes;
OIMO.DebugDraw.drawBvh;
OIMO.DebugDraw.drawBvhMinLevel;
OIMO.DebugDraw.drawBvhMaxLevel;
OIMO.DebugDraw.drawAabbs;
OIMO.DebugDraw.drawBases;
OIMO.DebugDraw.drawPairs;
OIMO.DebugDraw.drawContacts;
OIMO.DebugDraw.drawContactBases;
OIMO.DebugDraw.drawJoints;
OIMO.DebugDraw.drawJointLimits;
OIMO.DebugDraw.style;
OIMO.DebugDraw.aabb;
OIMO.DebugDraw.basis;
OIMO.DebugDraw.ellipse;
OIMO.DebugDraw.arc;
OIMO.DebugDraw.cone;
OIMO.DebugDraw.cylinder;
OIMO.DebugDraw.capsule;
OIMO.DebugDraw.sphere;
OIMO.DebugDraw.box;
OIMO.DebugDraw.rect;
OIMO.DebugDraw.point;
OIMO.DebugDraw.triangle;
OIMO.DebugDraw.line;
OIMO.DebugDrawStyle.shapeColor1;
OIMO.DebugDrawStyle.shapeColor2;
OIMO.DebugDrawStyle.sleepyShapeColor1;
OIMO.DebugDrawStyle.sleepyShapeColor2;
OIMO.DebugDrawStyle.sleepingShapeColor1;
OIMO.DebugDrawStyle.sleepingShapeColor2;
OIMO.DebugDrawStyle.staticShapeColor;
OIMO.DebugDrawStyle.kinematicShapeColor;
OIMO.DebugDrawStyle.aabbColor;
OIMO.DebugDrawStyle.bvhNodeColor;
OIMO.DebugDrawStyle.pairColor;
OIMO.DebugDrawStyle.contactColor;
OIMO.DebugDrawStyle.contactColor2;
OIMO.DebugDrawStyle.contactColor3;
OIMO.DebugDrawStyle.contactColor4;
OIMO.DebugDrawStyle.newContactColor;
OIMO.DebugDrawStyle.disabledContactColor;
OIMO.DebugDrawStyle.contactNormalColor;
OIMO.DebugDrawStyle.contactTangentColor;
OIMO.DebugDrawStyle.contactBinormalColor;
OIMO.DebugDrawStyle.contactNormalLength;
OIMO.DebugDrawStyle.contactTangentLength;
OIMO.DebugDrawStyle.contactBinormalLength;
OIMO.DebugDrawStyle.jointLineColor;
OIMO.DebugDrawStyle.jointErrorColor;
OIMO.DebugDrawStyle.jointRotationalConstraintRadius;
OIMO.DebugDrawStyle.basisLength;
OIMO.DebugDrawStyle.basisColorX;
OIMO.DebugDrawStyle.basisColorY;
OIMO.DebugDrawStyle.basisColorZ;
OIMO.Performance.broadPhaseCollisionTime;
OIMO.Performance.narrowPhaseCollisionTime;
OIMO.Performance.dynamicsTime;
OIMO.Performance.totalTime;
OIMO.PositionCorrectionAlgorithm.BAUMGARTE;
OIMO.PositionCorrectionAlgorithm.SPLIT_IMPULSE;
OIMO.PositionCorrectionAlgorithm.NGS;
OIMO.Joint.userData;
OIMO.JointConfig.rigidBody1;
OIMO.JointConfig.rigidBody2;
OIMO.JointConfig.localAnchor1;
OIMO.JointConfig.localAnchor2;
OIMO.JointConfig.allowCollision;
OIMO.JointConfig.solverType;
OIMO.JointConfig.positionCorrectionAlgorithm;
OIMO.JointConfig.breakForce;
OIMO.JointConfig.breakTorque;
OIMO.CylindricalJointConfig.localAxis1;
OIMO.CylindricalJointConfig.localAxis2;
OIMO.CylindricalJointConfig.translationalLimitMotor;
OIMO.CylindricalJointConfig.translationalSpringDamper;
OIMO.CylindricalJointConfig.rotationalLimitMotor;
OIMO.CylindricalJointConfig.rotationalSpringDamper;
OIMO.JointType.SPHERICAL;
OIMO.JointType.REVOLUTE;
OIMO.JointType.CYLINDRICAL;
OIMO.JointType.PRISMATIC;
OIMO.JointType.UNIVERSAL;
OIMO.JointType.RAGDOLL;
OIMO.PrismaticJointConfig.localAxis1;
OIMO.PrismaticJointConfig.localAxis2;
OIMO.PrismaticJointConfig.limitMotor;
OIMO.PrismaticJointConfig.springDamper;
OIMO.RagdollJointConfig.localTwistAxis1;
OIMO.RagdollJointConfig.localTwistAxis2;
OIMO.RagdollJointConfig.localSwingAxis1;
OIMO.RagdollJointConfig.twistSpringDamper;
OIMO.RagdollJointConfig.twistLimitMotor;
OIMO.RagdollJointConfig.swingSpringDamper;
OIMO.RagdollJointConfig.maxSwingAngle1;
OIMO.RagdollJointConfig.maxSwingAngle2;
OIMO.RevoluteJointConfig.localAxis1;
OIMO.RevoluteJointConfig.localAxis2;
OIMO.RevoluteJointConfig.springDamper;
OIMO.RevoluteJointConfig.limitMotor;
OIMO.RotationalLimitMotor.lowerLimit;
OIMO.RotationalLimitMotor.upperLimit;
OIMO.RotationalLimitMotor.motorSpeed;
OIMO.RotationalLimitMotor.motorTorque;
OIMO.SphericalJointConfig.springDamper;
OIMO.SpringDamper.frequency;
OIMO.SpringDamper.dampingRatio;
OIMO.SpringDamper.useSymplecticEuler;
OIMO.TranslationalLimitMotor.lowerLimit;
OIMO.TranslationalLimitMotor.upperLimit;
OIMO.TranslationalLimitMotor.motorSpeed;
OIMO.TranslationalLimitMotor.motorForce;
OIMO.UniversalJointConfig.localAxis1;
OIMO.UniversalJointConfig.localAxis2;
OIMO.UniversalJointConfig.springDamper1;
OIMO.UniversalJointConfig.springDamper2;
OIMO.UniversalJointConfig.limitMotor1;
OIMO.UniversalJointConfig.limitMotor2;
OIMO.ConstraintSolverType.ITERATIVE;
OIMO.ConstraintSolverType.DIRECT;
OIMO.MassData.mass;
OIMO.MassData.localInertia;
OIMO.RigidBody.userData;
OIMO.RigidBodyConfig.position;
OIMO.RigidBodyConfig.rotation;
OIMO.RigidBodyConfig.linearVelocity;
OIMO.RigidBodyConfig.angularVelocity;
OIMO.RigidBodyConfig.type;
OIMO.RigidBodyConfig.autoSleep;
OIMO.RigidBodyConfig.linearDamping;
OIMO.RigidBodyConfig.angularDamping;
OIMO.RigidBodyType.DYNAMIC;
OIMO.RigidBodyType.STATIC;
OIMO.RigidBodyType.KINEMATIC;
OIMO.Shape.userData;
OIMO.ShapeConfig.position;
OIMO.ShapeConfig.rotation;
OIMO.ShapeConfig.friction;
OIMO.ShapeConfig.restitution;
OIMO.ShapeConfig.density;
OIMO.ShapeConfig.geometry;
OIMO.ShapeConfig.collisionGroup;
OIMO.ShapeConfig.collisionMask;
OIMO.ShapeConfig.contactCallback;
