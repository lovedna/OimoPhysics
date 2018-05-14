package demo;

import oimo.dynamics.common.DebugDraw;
import oimo.collision.broadphase.BroadPhase;
import oimo.collision.geometry.Geometry;
import oimo.collision.geometry.ConvexGeometry;
import oimo.collision.broadphase.BroadPhaseProxyCallback;
import oimo.collision.broadphase.BroadPhaseType;
import oimo.collision.broadphase.Proxy;
import oimo.collision.broadphase.ProxyPair;
import oimo.collision.broadphase.bruteforce.BruteForceBroadPhase;
import oimo.collision.broadphase.bvh.BvhBroadPhase;
import oimo.collision.broadphase.bvh.BvhInsertionStrategy;
import oimo.collision.broadphase.bvh.BvhNode;
import oimo.collision.broadphase.bvh.BvhProxy;
import oimo.collision.broadphase.bvh.BvhStrategy;
import oimo.collision.broadphase.bvh.BvhTree;
import oimo.collision.geometry.Aabb;
import oimo.collision.geometry.BoxGeometry;
import oimo.collision.geometry.CapsuleGeometry;
import oimo.collision.geometry.ConeGeometry;
import oimo.collision.geometry.ConvexHullGeometry;
import oimo.collision.geometry.CylinderGeometry;
import oimo.collision.geometry.GeometryType;
import oimo.collision.geometry.RayCastHit;
import oimo.collision.geometry.SphereGeometry;
import oimo.collision.narrowphase.CollisionMatrix;
import oimo.collision.narrowphase.DetectorResult;
import oimo.collision.narrowphase.DetectorResultPoint;
import oimo.collision.narrowphase.detector.CachedDetectorData;
import oimo.collision.narrowphase.detector.Detector;
import oimo.collision.narrowphase.detector.CapsuleCapsuleDetector;
import oimo.collision.narrowphase.detector.GjkEpaDetector;
import oimo.collision.narrowphase.detector.SphereBoxDetector;
import oimo.collision.narrowphase.detector.SphereCapsuleDetector;
import oimo.collision.narrowphase.detector.SphereSphereDetector;
import oimo.collision.narrowphase.detector.gjkepa.EpaPolyhedron;
import oimo.collision.narrowphase.detector.gjkepa.EpaPolyhedronState;
import oimo.collision.narrowphase.detector.gjkepa.EpaTriangle;
import oimo.collision.narrowphase.detector.gjkepa.EpaVertex;
import oimo.collision.narrowphase.detector.gjkepa.GjkCache;
import oimo.common.Vec3;
import oimo.common.Transform;
import oimo.common.Setting;
import oimo.collision.narrowphase.detector.gjkepa.GjkEpa;
import oimo.collision.narrowphase.detector.gjkepa.GjkEpaLog;
import oimo.collision.narrowphase.detector.gjkepa.GjkEpaResultState;
import oimo.collision.narrowphase.detector.gjkepa.SimplexUtil;
import oimo.common.Mat3;
import oimo.common.Mat4;
import oimo.common.MathUtil;
import oimo.common.Pool;
import oimo.common.Quat;
import oimo.dynamics.Contact;
import oimo.dynamics.ContactLink;
import oimo.dynamics.ContactManager;
import oimo.dynamics.Island;
import oimo.dynamics.TimeStep;
import oimo.dynamics.World;
import oimo.dynamics.callback.AabbTestCallback;
import oimo.dynamics.callback.ContactCallback;
import oimo.dynamics.callback.RayCastCallback;
import oimo.dynamics.callback.RayCastClosest;
import oimo.dynamics.common.DebugDrawStyle;
import oimo.dynamics.common.Performance;
import oimo.dynamics.constraint.ConstraintSolver;
import oimo.dynamics.constraint.PositionCorrectionAlgorithm;
import oimo.dynamics.constraint.contact.ContactConstraint;
import oimo.dynamics.constraint.contact.ContactImpulse;
import oimo.dynamics.constraint.contact.Manifold;
import oimo.dynamics.constraint.contact.ManifoldPoint;
import oimo.dynamics.constraint.contact.ManifoldUpdater;
import oimo.dynamics.constraint.info.JacobianRow;
import oimo.dynamics.constraint.info.contact.ContactSolverInfo;
import oimo.dynamics.constraint.info.contact.ContactSolverInfoRow;
import oimo.dynamics.constraint.info.joint.JointSolverInfo;
import oimo.dynamics.constraint.info.joint.JointSolverInfoRow;
import oimo.dynamics.constraint.joint.Joint;
import oimo.dynamics.constraint.joint.CylindricalJoint;
import oimo.dynamics.constraint.joint.JointConfig;
import oimo.dynamics.constraint.joint.CylindricalJointConfig;
import oimo.dynamics.constraint.joint.BasisTracker;
import oimo.dynamics.constraint.joint.JointImpulse;
import oimo.dynamics.constraint.joint.JointLink;
import oimo.dynamics.constraint.joint.JointMacro;
import oimo.dynamics.constraint.joint.JointType;
import oimo.dynamics.constraint.joint.PrismaticJoint;
import oimo.dynamics.constraint.joint.PrismaticJointConfig;
import oimo.dynamics.constraint.joint.RagdollJoint;
import oimo.dynamics.constraint.joint.RagdollJointConfig;
import oimo.dynamics.constraint.joint.RevoluteJoint;
import oimo.dynamics.constraint.joint.RevoluteJointConfig;
import oimo.dynamics.constraint.joint.RotationalLimitMotor;
import oimo.dynamics.constraint.joint.SphericalJoint;
import oimo.dynamics.constraint.joint.SphericalJointConfig;
import oimo.dynamics.constraint.joint.SpringDamper;
import oimo.dynamics.constraint.joint.TranslationalLimitMotor;
import oimo.dynamics.constraint.joint.UniversalJoint;
import oimo.dynamics.constraint.joint.UniversalJointConfig;
import oimo.dynamics.constraint.solver.ConstraintSolverType;
import oimo.dynamics.constraint.solver.common.ContactSolverMassDataRow;
import oimo.dynamics.constraint.solver.common.JointSolverMassDataRow;
import oimo.dynamics.constraint.solver.direct.Boundary;
import oimo.dynamics.constraint.solver.direct.BoundaryBuildInfo;
import oimo.dynamics.constraint.solver.direct.BoundaryBuilder;
import oimo.dynamics.constraint.solver.direct.BoundarySelector;
import oimo.dynamics.constraint.solver.direct.DirectJointConstraintSolver;
import oimo.dynamics.constraint.solver.direct.MassMatrix;
import oimo.dynamics.constraint.solver.pgs.PgsContactConstraintSolver;
import oimo.dynamics.constraint.solver.pgs.PgsJointConstraintSolver;
import oimo.dynamics.rigidbody.MassData;
import oimo.dynamics.rigidbody.RigidBody;
import oimo.dynamics.rigidbody.RigidBodyConfig;
import oimo.dynamics.rigidbody.RigidBodyType;
import oimo.dynamics.rigidbody.Shape;
import oimo.dynamics.rigidbody.ShapeConfig;

/**
 * ...
 */
class Export {
	static function main():Void {
	}
}